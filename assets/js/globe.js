/* ==========================================================================
   Interactive 3D Canvas Globe
   Smooth rotating sphere with connection points and pulsing city markers
   ========================================================================== */

function initGlobe() {
  const container = document.getElementById('globe-canvas-container');
  if (!container) return;

  const canvas = document.createElement('canvas');
  canvas.width = container.clientWidth || 500;
  canvas.height = 500;
  container.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  let width = canvas.width;
  let height = canvas.height;
  let globeRadius = Math.min(width, height) * 0.38;
  let rotation = 0;
  const rotationSpeed = 0.005;

  // Key global cities/locations
  const locations = [
    { name: "Gurugram / India", lat: 28.4595, lon: 77.0266, active: true },
    { name: "London / UK", lat: 51.5074, lon: -0.1278 },
    { name: "New York / USA", lat: 40.7128, lon: -74.0060 },
    { name: "San Francisco / USA", lat: 37.7749, lon: -122.4194 },
    { name: "Tokyo / Japan", lat: 35.6762, lon: 139.6503 },
    { name: "Sydney / Australia", lat: -33.8688, lon: 151.2093 },
    { name: "Singapore", lat: 1.3521, lon: 103.8198 },
    { name: "Dubai / UAE", lat: 25.2048, lon: 55.2708 },
    { name: "Berlin / Germany", lat: 52.5200, lon: 13.4050 },
    { name: "Toronto / Canada", lat: 43.6532, lon: -79.3832 },
    { name: "Johannesburg / SA", lat: -26.2041, lon: 28.0473 },
    { name: "Sao Paulo / Brazil", lat: -23.5505, lon: -46.6333 }
  ];

  // Generate grid points across sphere
  const dots = [];
  const dotCount = 800;
  for (let i = 0; i < dotCount; i++) {
    const phi = Math.acos(-1 + (2 * i) / dotCount);
    const theta = Math.sqrt(dotCount * Math.PI) * phi;
    dots.push({
      x: Math.cos(theta) * Math.sin(phi),
      y: Math.sin(theta) * Math.sin(phi),
      z: Math.cos(phi)
    });
  }

  function latLonTo3D(lat, lon) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    return {
      x: -(Math.sin(phi) * Math.cos(theta)),
      y: Math.cos(phi),
      z: Math.sin(phi) * Math.sin(theta)
    };
  }

  let pulse = 0;

  function render() {
    ctx.clearRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height / 2;

    rotation += rotationSpeed;
    pulse += 0.05;

    // Outer atmosphere glow
    const gradGlow = ctx.createRadialGradient(centerX, centerY, globeRadius * 0.8, centerX, centerY, globeRadius * 1.25);
    gradGlow.addColorStop(0, 'rgba(20, 128, 221, 0.25)');
    gradGlow.addColorStop(0.7, 'rgba(20, 128, 221, 0.08)');
    gradGlow.addColorStop(1, 'rgba(20, 128, 221, 0)');
    ctx.fillStyle = gradGlow;
    ctx.beginPath();
    ctx.arc(centerX, centerY, globeRadius * 1.25, 0, Math.PI * 2);
    ctx.fill();

    // Dark globe base sphere
    const sphereGrad = ctx.createRadialGradient(centerX - globeRadius * 0.3, centerY - globeRadius * 0.3, globeRadius * 0.1, centerX, centerY, globeRadius);
    sphereGrad.addColorStop(0, 'rgba(21, 50, 108, 0.95)');
    sphereGrad.addColorStop(1, 'rgba(8, 20, 48, 0.98)');
    ctx.fillStyle = sphereGrad;
    ctx.beginPath();
    ctx.arc(centerX, centerY, globeRadius, 0, Math.PI * 2);
    ctx.fill();

    // Globe border stroke
    ctx.strokeStyle = 'rgba(149, 236, 255, 0.35)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Render longitude/latitude rings
    ctx.strokeStyle = 'rgba(149, 236, 255, 0.08)';
    ctx.lineWidth = 1;
    for (let r = 0.25; r <= 0.75; r += 0.25) {
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius * r, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Render 3D surface dots
    const cosR = Math.cos(rotation);
    const sinR = Math.sin(rotation);

    dots.forEach(dot => {
      // Rotate around Y axis
      const rx = dot.x * cosR - dot.z * sinR;
      const rz = dot.x * sinR + dot.z * cosR;

      if (rz > 0) { // Front side of sphere
        const screenX = centerX + rx * globeRadius;
        const screenY = centerY + dot.y * globeRadius;
        const alpha = (rz) * 0.6;
        ctx.fillStyle = `rgba(149, 236, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(screenX, screenY, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    // Render locations and pulsing pins
    locations.forEach(loc => {
      const coords = latLonTo3D(loc.lat, loc.lon);
      const rx = coords.x * cosR - coords.z * sinR;
      const rz = coords.x * sinR + coords.z * cosR;

      if (rz > -0.1) { // Visible on globe front
        const screenX = centerX + rx * globeRadius;
        const screenY = centerY + coords.y * globeRadius;
        const alpha = Math.max(0.1, (rz + 0.1) / 1.1);

        // Core marker
        ctx.fillStyle = loc.active ? '#ffe600' : '#1480dd';
        ctx.beginPath();
        ctx.arc(screenX, screenY, loc.active ? 5 : 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Pulsing radar ripple
        const pulseSize = 4 + (Math.sin(pulse) + 1) * (loc.active ? 8 : 4);
        ctx.strokeStyle = loc.active ? `rgba(255, 230, 0, ${alpha * 0.7})` : `rgba(20, 128, 221, ${alpha * 0.6})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(screenX, screenY, pulseSize, 0, Math.PI * 2);
        ctx.stroke();

        // Location text label
        if (loc.active || rz > 0.4) {
          ctx.font = loc.active ? 'bold 11px Inter, sans-serif' : '10px Inter, sans-serif';
          ctx.fillStyle = loc.active ? '#ffffff' : 'rgba(255, 255, 255, 0.8)';
          ctx.fillText(loc.name, screenX + 8, screenY + 3);
        }
      }
    });

    requestAnimationFrame(render);
  }

  render();

  // Resize listener
  window.addEventListener('resize', () => {
    width = canvas.width = container.clientWidth || 500;
    height = canvas.height = 500;
    globeRadius = Math.min(width, height) * 0.38;
  });
}

document.addEventListener('DOMContentLoaded', initGlobe);
