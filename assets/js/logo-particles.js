/* ==========================================================================
   PMIUSA — Logo Particle Morphing Intro
   Particles scatter ? morph into PMIUSA logo ? dissolve ? page appears
   ========================================================================== */
(function () {
  "use strict";

  var CFG = {
    MAX_PARTICLES : 4500,
    SAMPLE_STEP   : 3,
    LOGO_SCALE    : 0.72,
    EASE          : 0.072,
    FRICTION      : 0.80,
    MOUSE_R       : 110,
    MOUSE_F       : 7,
    F_IDLE        : 55,
    F_MORPH       : 130,
    F_HOLD        : 220,
    F_DISSOLVE    : 70,
    BG            : "#04091a",
    TAGLINE_COLOR : "rgba(160,200,255,0.75)"
  };

  function remapColor(r, g, b) {
    if (r > 140 && r > g * 1.6 && r > b * 1.6) {
      return "rgb(" + Math.min(255,r+30) + "," + Math.max(0,g-10) + "," + Math.max(0,b-10) + ")";
    }
    if (b > r && b > g && b > 60) {
      var t = b / 255;
      return "rgb(" + Math.round(80*t) + "," + Math.round(160*t) + ",255)";
    }
    if (r < 60 && g < 60 && b < 60) return "#ffffff";
    return "rgb(" + Math.min(255,r+120) + "," + Math.min(255,g+120) + "," + Math.min(255,b+120) + ")";
  }

  function Particle(cx, cy, canvasW, canvasH) {
    var a = Math.random() * Math.PI * 2;
    var d = 80 + Math.random() * Math.max(canvasW, canvasH) * 0.55;
    this.x  = cx + Math.cos(a) * d;
    this.y  = cy + Math.sin(a) * d;
    this.vx = (Math.random() - 0.5) * 5;
    this.vy = (Math.random() - 0.5) * 5;
    this.tx    = cx;
    this.ty    = cy;
    this.color = "#60a5fa";
    this.size  = 1 + Math.random() * 2;
    this.ease  = CFG.EASE * (0.6 + Math.random() * 0.8);
    this.alpha = 0;
    this.morphing   = false;
    this.dissolving = false;
    this.floatPhase = Math.random() * Math.PI * 2;
  }

  Particle.prototype.setTarget = function(tx, ty, color) {
    this.tx    = tx;
    this.ty    = ty;
    this.color = color;
  };

  Particle.prototype.update = function(mouse) {
    if (this.dissolving) {
      this.vx += (Math.random() - 0.5) * 3;
      this.vy -= 0.3 + Math.random() * 0.4;
      this.vx *= 0.94;
      this.vy *= 0.94;
      this.x  += this.vx;
      this.y  += this.vy;
      this.alpha -= 0.022;
      if (this.alpha < 0) this.alpha = 0;
      return;
    }

    if (this.morphing) {
      var dx = this.tx - this.x;
      var dy = this.ty - this.y;
      this.vx += dx * this.ease;
      this.vy += dy * this.ease;
      this.alpha = Math.min(1, this.alpha + 0.05);
    } else {
      this.floatPhase += 0.015;
      this.vx += (Math.random() - 0.5) * 0.25;
      this.vy += Math.sin(this.floatPhase) * 0.06;
      this.alpha = Math.min(0.55, this.alpha + 0.025);
      this.color = "hsl(" + (200 + Math.sin(this.floatPhase * 0.5) * 20) + ",90%,70%)";
    }

    if (mouse.x !== null) {
      var mdx = this.x - mouse.x;
      var mdy = this.y - mouse.y;
      var d2  = mdx*mdx + mdy*mdy;
      var r2  = CFG.MOUSE_R * CFG.MOUSE_R;
      if (d2 < r2 && d2 > 0) {
        var d = Math.sqrt(d2);
        var f = ((CFG.MOUSE_R - d) / CFG.MOUSE_R) * CFG.MOUSE_F;
        this.vx += (mdx / d) * f;
        this.vy += (mdy / d) * f;
      }
    }

    this.vx *= CFG.FRICTION;
    this.vy *= CFG.FRICTION;
    this.x  += this.vx;
    this.y  += this.vy;
  };

  Particle.prototype.draw = function(ctx) {
    if (this.alpha <= 0.01) return;
    ctx.globalAlpha = Math.max(0, Math.min(1, this.alpha));
    ctx.fillStyle   = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  };

  function LogoParticleIntro(overlayId, canvasId, imageSrc) {
    this.overlay  = document.getElementById(overlayId);
    this.canvas   = document.getElementById(canvasId);
    this.ctx      = this.canvas.getContext("2d");
    this.imageSrc = imageSrc;
    this.particles = [];
    this.targets   = [];
    this.state     = "idle";
    this.frame     = 0;
    this.mouse     = { x: null, y: null };
    this.raf       = null;
    this.done      = false;
    this._bindEvents();
    this._loadImage();
  }

  LogoParticleIntro.prototype._bindEvents = function() {
    var self = this;
    window.addEventListener("resize", function() {
      self._sizeCanvas();
      if (self._img) { self._sampleImage(); self._buildParticles(); }
    });
    this.canvas.addEventListener("mousemove", function(e) {
      var r = self.canvas.getBoundingClientRect();
      self.mouse.x = (e.clientX - r.left) * (self.canvas.width / r.width);
      self.mouse.y = (e.clientY - r.top)  * (self.canvas.height / r.height);
    });
    this.canvas.addEventListener("mouseleave", function() {
      self.mouse.x = null; self.mouse.y = null;
    });
    var skipBtn = document.getElementById("introSkipBtn");
    if (skipBtn) skipBtn.addEventListener("click", function() { self._finish(); });
  };

  LogoParticleIntro.prototype._sizeCanvas = function() {
    this.canvas.width  = window.innerWidth;
    this.canvas.height = window.innerHeight;
  };

  LogoParticleIntro.prototype._loadImage = function() {
    var self = this;
    var img  = new Image();
    img.onload = function() {
      self._img = img;
      self._sizeCanvas();
      self._sampleImage();
      self._buildParticles();
      self._startLoop();
    };
    img.src = this.imageSrc;
  };

  LogoParticleIntro.prototype._sampleImage = function() {
    var cw = this.canvas.width, ch = this.canvas.height;
    var img = this._img;
    var scale = Math.min(
      (cw * CFG.LOGO_SCALE) / img.width,
      (ch * CFG.LOGO_SCALE) / img.height
    );
    var iw = Math.round(img.width  * scale);
    var ih = Math.round(img.height * scale);
    var ox = Math.round((cw - iw) / 2);
    var oy = Math.round((ch - ih) / 2);
    var off = document.createElement("canvas");
    off.width = iw; off.height = ih;
    var octx = off.getContext("2d");
    octx.drawImage(img, 0, 0, iw, ih);
    var data = octx.getImageData(0, 0, iw, ih).data;
    this.targets = [];
    var step = CFG.SAMPLE_STEP;
    for (var y = 0; y < ih; y += step) {
      for (var x = 0; x < iw; x += step) {
        var i = (y * iw + x) * 4;
        var r = data[i], g = data[i+1], b = data[i+2], a = data[i+3];
        if (a < 30) continue;
        if (r > 228 && g > 228 && b > 228) continue;
        this.targets.push({ x: ox+x, y: oy+y, color: remapColor(r,g,b) });
      }
    }
  };

  LogoParticleIntro.prototype._buildParticles = function() {
    var cw = this.canvas.width, ch = this.canvas.height;
    var cx = cw / 2, cy = ch / 2;
    var pool  = this.targets.slice().sort(function() { return Math.random()-0.5; });
    var count = Math.min(CFG.MAX_PARTICLES, pool.length);
    this.particles = [];
    for (var i = 0; i < count; i++) {
      var p = new Particle(cx, cy, cw, ch);
      p.setTarget(pool[i].x, pool[i].y, pool[i].color);
      this.particles.push(p);
    }
  };

  LogoParticleIntro.prototype._setState = function(s) {
    this.state = s;
    this.frame = 0;
    if (s === "morph")   this.particles.forEach(function(p){ p.morphing=true;  p.dissolving=false; });
    if (s === "idle")    this.particles.forEach(function(p){ p.morphing=false; p.dissolving=false; });
    if (s === "dissolve")this.particles.forEach(function(p){ p.morphing=false; p.dissolving=true;  });
  };

  LogoParticleIntro.prototype._startLoop = function() {
    var self = this;
    this._setState("idle");
    function tick() {
      if (self.done) return;
      self.raf = requestAnimationFrame(tick);
      self._tick();
    }
    tick();
  };

  LogoParticleIntro.prototype._tick = function() {
    this.frame++;
    var ctx = this.ctx, canvas = this.canvas;

    switch (this.state) {
      case "idle":    if (this.frame >= CFG.F_IDLE)    this._setState("morph");   break;
      case "morph":   if (this.frame >= CFG.F_MORPH)   this._setState("hold");    break;
      case "hold":    if (this.frame >= CFG.F_HOLD)    this._setState("dissolve");break;
      case "dissolve":if (this.frame >= CFG.F_DISSOLVE){ this._finish(); return; } break;
    }

    ctx.fillStyle = CFG.BG;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    var mouse = this.mouse;
    ctx.save();
    this.particles.forEach(function(p){ p.update(mouse); p.draw(ctx); });
    ctx.restore();
    ctx.globalAlpha = 1;

    if (this.state === "hold" || this.state === "dissolve") {
      var progress = Math.min(1, this.frame / 40);
      ctx.globalAlpha = this.state === "dissolve" ? Math.max(0, 1 - this.frame/CFG.F_DISSOLVE) : progress;
      ctx.fillStyle   = CFG.TAGLINE_COLOR;
      ctx.font        = "400 " + Math.max(11, canvas.width * 0.013) + "px Inter, sans-serif";
      ctx.textAlign   = "center";
      ctx.fillText(
        "P R E M I U M   I T   T R A I N I N G   &   S E R V I C E S",
        canvas.width / 2,
        canvas.height * 0.80
      );
      ctx.globalAlpha = 1;
    }
  };

  LogoParticleIntro.prototype._finish = function() {
    if (this.done) return;
    this.done = true;
    cancelAnimationFrame(this.raf);
    var overlay = this.overlay;
    overlay.style.transition = "opacity 0.9s ease, visibility 0.9s ease";
    overlay.style.opacity    = "0";
    overlay.style.visibility = "hidden";
    document.body.style.overflow = "";
    setTimeout(function(){ if (overlay.parentNode) overlay.parentNode.removeChild(overlay); }, 950);
  };

  document.addEventListener("DOMContentLoaded", function() {
    if (sessionStorage.getItem("pmiusa_intro_seen")) {
      var ol = document.getElementById("logo-intro-overlay");
      if (ol) { ol.style.display = "none"; document.body.style.overflow = ""; }
      return;
    }
    sessionStorage.setItem("pmiusa_intro_seen", "1");
    var overlay = document.getElementById("logo-intro-overlay");
    var canvas  = document.getElementById("logo-intro-canvas");
    if (!overlay || !canvas) return;
    document.body.style.overflow = "hidden";
    new LogoParticleIntro("logo-intro-overlay", "logo-intro-canvas",
      "assets/images/pmiusa-logo-original.png");
  });
})();

