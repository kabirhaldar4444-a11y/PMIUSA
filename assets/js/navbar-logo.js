/* ==========================================================================
   PMIUSA Navbar Logo — Smart Particle Morph & Interactive Logo
   - Real Logo: Official Navy Blue (feathers + PMI) & Red (lower wing + USA)
   - On page load: Particles scatter briefly → morph into the exact logo
   - After animation: Settles into the 100% STABLE, CRISP, CLEAR official logo
   - Interactive Cursor: Hovering over the logo ripples particles around cursor;
     moving mouse away smoothly springs them back into the stable logo.
   - Preserves high-DPI (Retina) crispness across all pages.
   ========================================================================== */

(function () {
  'use strict';

  var SAMPLE_STEP  = 2;      // pixel sampling stride (smaller = higher particle density)
  var F_SCATTER    = 24;     // frames of organic scatter drift (~0.4s)
  var F_MORPH      = 65;     // frames for magnetic particle convergence (~1.1s)
  var LOGO_SRC     = 'assets/images/pmiusa-logo-transparent.png'; // Real Navy + Red logo

  function getCanvasSize(canvas) {
    var rect = canvas.getBoundingClientRect();
    var w = Math.round(rect.width) || 182;
    var h = Math.round(rect.height) || 48;
    return { w: w, h: h };
  }

  /* ── Particle Class ──────────────────────────────────────────────────── */
  function Particle(cw, ch, tx, ty, r, g, b) {
    // Start scattered randomly around canvas
    this.x  = Math.random() * cw;
    this.y  = Math.random() * ch;
    this.vx = (Math.random() - 0.5) * 3;
    this.vy = (Math.random() - 0.5) * 3;

    this.tx = tx;
    this.ty = ty;
    this.r  = r;
    this.g  = g;
    this.b  = b;
    this.color = 'rgb(' + r + ',' + g + ',' + b + ')';

    this.sz = 0.9 + Math.random() * 0.9;
    this.alpha = 0;
  }

  Particle.prototype.update = function (phase, mouseX, mouseY) {
    if (phase === 'scatter') {
      this.vx += (Math.random() - 0.5) * 0.25;
      this.vy += (Math.random() - 0.5) * 0.25;
      this.vx *= 0.82;
      this.vy *= 0.82;
      this.x  += this.vx;
      this.y  += this.vy;
      this.alpha = Math.min(1, this.alpha + 0.05);
      return;
    }

    if (phase === 'morph') {
      this.vx += (this.tx - this.x) * 0.13;
      this.vy += (this.ty - this.y) * 0.13;
      this.vx *= 0.74;
      this.vy *= 0.74;
      this.x  += this.vx;
      this.y  += this.vy;
      this.alpha = 1;
      return;
    }

    // In 'stable' / interactive hover phase:
    // Cursor repulsion if mouse is over/near the particle
    if (mouseX !== null && mouseY !== null) {
      var dx = this.x - mouseX;
      var dy = this.y - mouseY;
      var dist = Math.sqrt(dx * dx + dy * dy);
      var radius = 34;
      if (dist < radius && dist > 0.01) {
        var force = (radius - dist) / radius;
        this.vx += (dx / dist) * force * 3.8;
        this.vy += (dy / dist) * force * 3.8;
      }
    }

    // Spring back toward stable target
    this.vx += (this.tx - this.x) * 0.18;
    this.vy += (this.ty - this.y) * 0.18;
    this.vx *= 0.72;
    this.vy *= 0.72;
    this.x  += this.vx;
    this.y  += this.vy;
  };

  Particle.prototype.draw = function (ctx, alphaMult) {
    var a = this.alpha * (alphaMult !== undefined ? alphaMult : 1);
    if (a <= 0.01) return;
    ctx.globalAlpha = a;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.sz, 0, Math.PI * 2);
    ctx.fill();
  };

  /* ── Navbar Controller ───────────────────────────────────────────────── */
  function NavbarLogo(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    this.particles = [];
    this.frame = 0;
    this.phase = 'scatter'; // 'scatter' | 'morph' | 'stable'
    this.logoOpacity = 0;

    this.mouseX = null;
    this.mouseY = null;
    this.isHovered = false;
    this.isDirty = true; // whether canvas needs redrawing

    this._img = null;
    this.raf = null;

    this._initEvents();
    this._load();
  }

  NavbarLogo.prototype._initEvents = function () {
    var self = this;
    var canvas = this.canvas;

    canvas.addEventListener('mousemove', function (e) {
      var rect = canvas.getBoundingClientRect();
      self.mouseX = e.clientX - rect.left;
      self.mouseY = e.clientY - rect.top;
      self.isHovered = true;
      self.isDirty = true;
      self._ensureLoop();
    });

    canvas.addEventListener('mouseenter', function () {
      self.isHovered = true;
      self.isDirty = true;
      self._ensureLoop();
    });

    canvas.addEventListener('mouseleave', function () {
      self.mouseX = null;
      self.mouseY = null;
      self.isHovered = false;
      self.isDirty = true;
      self._ensureLoop();
    });

    window.addEventListener('resize', function () {
      self._resizeCanvas();
      self.isDirty = true;
      self._renderStaticLogo();
    });
  };

  NavbarLogo.prototype._ensureLoop = function () {
    if (!this.raf) {
      var self = this;
      this.raf = requestAnimationFrame(function () {
        self._tick();
      });
    }
  };

  NavbarLogo.prototype._resizeCanvas = function () {
    var size = getCanvasSize(this.canvas);
    this.cssW = size.w;
    this.cssH = size.h;

    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.dpr = dpr;

    this.canvas.width = Math.round(this.cssW * dpr);
    this.canvas.height = Math.round(this.cssH * dpr);
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.scale(dpr, dpr);
  };

  NavbarLogo.prototype._load = function () {
    var self = this;
    var img = new Image();
    img.onload = function () {
      self._img = img;
      self._resizeCanvas();
      self._sample();
      self._ensureLoop();
    };
    img.onerror = function () {
      console.warn('NavbarLogo: Failed to load logo from ' + LOGO_SRC);
    };
    img.src = LOGO_SRC;
  };

  NavbarLogo.prototype._sample = function () {
    var cw = this.cssW;
    var ch = this.cssH;
    var img = this._img;
    if (!img || !img.naturalWidth) return;

    var scale = Math.min(cw / img.naturalWidth, ch / img.naturalHeight);
    var iw = Math.round(img.naturalWidth * scale);
    var ih = Math.round(img.naturalHeight * scale);
    var ox = Math.round((cw - iw) / 2);
    var oy = Math.round((ch - ih) / 2);

    this.logoX = ox;
    this.logoY = oy;
    this.logoW = iw;
    this.logoH = ih;

    var off = document.createElement('canvas');
    off.width = iw;
    off.height = ih;
    var oc = off.getContext('2d');
    oc.drawImage(img, 0, 0, iw, ih);
    var data = oc.getImageData(0, 0, iw, ih).data;

    var targets = [];
    var s = SAMPLE_STEP;
    for (var y = 0; y < ih; y += s) {
      for (var x = 0; x < iw; x += s) {
        var idx = (y * iw + x) * 4;
        var r = data[idx];
        var g = data[idx + 1];
        var b = data[idx + 2];
        var a = data[idx + 3];

        if (a < 50) continue; // transparent pixel

        targets.push({
          x: ox + x,
          y: oy + y,
          r: r,
          g: g,
          b: b
        });
      }
    }

    // Shuffle targets to give an organic scatter/convergence
    targets.sort(function () { return Math.random() - 0.5; });

    this.particles = [];
    for (var i = 0; i < targets.length; i++) {
      var t = targets[i];
      this.particles.push(new Particle(cw, ch, t.x, t.y, t.r, t.g, t.b));
    }
  };

  NavbarLogo.prototype._renderStaticLogo = function () {
    var ctx = this.ctx;
    var cw = this.cssW;
    var ch = this.cssH;
    ctx.clearRect(0, 0, cw, ch);
    if (this._img && this._img.naturalWidth) {
      ctx.globalAlpha = 1;
      ctx.drawImage(this._img, this.logoX, this.logoY, this.logoW, this.logoH);
    }
  };

  NavbarLogo.prototype._tick = function () {
    var self = this;
    this.raf = null;
    this.frame++;

    var ctx = this.ctx;
    var cw = this.cssW;
    var ch = this.cssH;
    var ps = this.particles;

    // ── Phase 1 & 2: Scatter & Morph ─────────────────────────────────────
    if (this.phase === 'scatter' && this.frame >= F_SCATTER) {
      this.phase = 'morph';
    } else if (this.phase === 'morph' && this.frame >= F_MORPH) {
      this.phase = 'stable';
    }

    // Increase official logo opacity as particles converge
    if (this.phase === 'morph' && this.frame >= F_SCATTER + 15) {
      this.logoOpacity = Math.min(1, this.logoOpacity + 0.05);
    } else if (this.phase === 'stable') {
      this.logoOpacity = Math.min(1, this.logoOpacity + 0.08);
    }

    // Clear canvas
    ctx.clearRect(0, 0, cw, ch);

    // ── When in STABLE phase (not hovered): render pure, sharp, stable logo ──
    if (this.phase === 'stable' && !this.isHovered) {
      // Check if all particles have settled close to target
      var allSettled = true;
      for (var i = 0; i < ps.length; i++) {
        var p = ps[i];
        p.update('stable', null, null);
        var dist = Math.abs(p.x - p.tx) + Math.abs(p.y - p.ty);
        if (dist > 0.4 || Math.abs(p.vx) > 0.05 || Math.abs(p.vy) > 0.05) {
          allSettled = false;
        }
      }

      if (allSettled && this.logoOpacity >= 1) {
        // Draw the 100% rock-solid, crystal-clear stable official logo!
        this._renderStaticLogo();
        // Animation is complete and stable; stop RAF loop until cursor enters!
        return;
      }
    }

    // ── During Scatter, Morph, or Interactive Hover ───────────────────────
    // Draw base logo image if blending in
    if (this.logoOpacity > 0.01 && this._img && this._img.naturalWidth) {
      ctx.save();
      // If hovered, lower image opacity slightly to emphasize interactive particles
      var imgAlpha = this.isHovered ? 0.45 : this.logoOpacity;
      ctx.globalAlpha = imgAlpha;
      ctx.drawImage(this._img, this.logoX, this.logoY, this.logoW, this.logoH);
      ctx.restore();
    }

    // Update & draw particles
    var particleAlphaMult = (this.phase === 'stable' && !this.isHovered)
      ? Math.max(0, 1 - this.logoOpacity)
      : 1;

    var mx = this.mouseX;
    var my = this.mouseY;

    ctx.save();
    for (var j = 0; j < ps.length; j++) {
      var pt = ps[j];
      pt.update(this.phase, mx, my);
      pt.draw(ctx, particleAlphaMult);
    }
    ctx.restore();
    ctx.globalAlpha = 1;

    // Continue loop
    this.raf = requestAnimationFrame(function () {
      self._tick();
    });
  };

  /* ── Boot ───────────────────────────────────────────────────────────── */
  function boot() {
    var canvas = document.getElementById('navbar-logo-canvas');
    if (!canvas) return;
    new NavbarLogo(canvas);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
