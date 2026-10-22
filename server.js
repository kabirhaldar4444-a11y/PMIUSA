const http = require('http');
const fs = require('fs');
const path = require('path');

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  let cleanUrl = req.url.split('?')[0];
  let reqPath = '/index.html';
  try {
    reqPath = decodeURIComponent(cleanUrl);
  } catch (e) {
    reqPath = cleanUrl;
  }

  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

  // Check process.cwd() first (standard in Vercel lambda), then __dirname, then brain artifacts
  const candidates = [
    path.join(process.cwd(), reqPath),
    path.join(__dirname, reqPath),
    path.join('C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\8e267a3f-0def-469d-a4eb-7b0e2e21cbcb', reqPath)
  ];

  let resolvedPath = null;
  for (const p of candidates) {
    if (fs.existsSync(p) && !fs.statSync(p).isDirectory()) {
      resolvedPath = p;
      break;
    }
    // Clean URLs: try adding .html
    if (fs.existsSync(p + '.html')) {
      resolvedPath = p + '.html';
      break;
    }
  }

  if (!resolvedPath) {
    res.writeHead(404, {
      'Content-Type': 'text/html; charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    });
    res.end('<h1>404 Not Found</h1>', 'utf-8');
    return;
  }

  const ext = path.extname(resolvedPath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(resolvedPath, (err, content) => {
    if (err) {
      res.writeHead(500, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(`Server Error: ${err.code}`);
    } else {
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(content);
    }
  });
});

module.exports = server;

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });
}
