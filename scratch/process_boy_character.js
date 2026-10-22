const sharp = require('sharp');
const path = require('path');

const inputPath = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\8e267a3f-0def-469d-a4eb-7b0e2e21cbcb\\boy_character_sliding_rope_1792670686550.jpg';
const outputPath = path.join(__dirname, '..', 'assets', 'images', 'rope_boy_character.png');

sharp(inputPath)
  .raw()
  .toBuffer({ resolveWithObject: true })
  .then(({ data, info }) => {
    const { width, height, channels } = info;
    const outData = Buffer.alloc(width * height * 4);

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const srcIdx = (y * width + x) * channels;
        const dstIdx = (y * width + x) * 4;

        const r = data[srcIdx];
        const g = data[srcIdx + 1];
        const b = data[srcIdx + 2];

        // Euclidean distance from pure white (255, 255, 255)
        const dist = Math.sqrt((255 - r)**2 + (255 - g)**2 + (255 - b)**2);

        outData[dstIdx] = r;
        outData[dstIdx + 1] = g;
        outData[dstIdx + 2] = b;

        if (dist < 18) {
          outData[dstIdx + 3] = 0; // Pure background transparent
        } else if (dist < 48) {
          outData[dstIdx + 3] = Math.round(((dist - 18) / 30) * 255); // Smooth anti-aliased edge
        } else {
          outData[dstIdx + 3] = 255;
        }

        // Erase static rope above boy's upper hand (y < 85) and below foot (y > 940)
        if (x >= 520 && x <= 585) {
          if (y < 85 || y > 940) {
            outData[dstIdx + 3] = 0;
          }
        }
      }
    }

    return sharp(outData, {
      raw: { width, height, channels: 4 }
    })
    .png({ quality: 95, compressionLevel: 8 })
    .toFile(outputPath);
  })
  .then(info => {
    console.log('SUCCESS: Saved transparent boy PNG:', info);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
