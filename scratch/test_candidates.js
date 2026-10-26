const fs = require('fs');
const sharp = require('sharp');

const candidates = [
  { name: 'modern_work_env', url: 'https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/9d0fd0c4-5c7f-4122-b884-64a1e1685d2d' },
  { name: 'girl_typing_laptop', url: 'https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/85cb9521-97c0-4a65-9358-7db8099fac7f' },
  { name: 'happy_smile_working', url: 'https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/02293768-9242-47e1-bf8f-d084ba0a2d1d' },
  { name: 'girl_webdev', url: 'https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/f5d2d866-d25c-4873-8d82-425d2c62fc2e' },
  { name: 'happy_coder', url: 'https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/3b4607a1-1cc6-41f1-926f-892ae880e7a5' },
  { name: 'multitasking', url: 'https://user-images.githubusercontent.com/74038190/213910842-5a320d6b-e48f-4d41-a901-0e6a357e8dae.gif' }
];

async function downloadAndInspect() {
  for (const c of candidates) {
    try {
      const res = await fetch(c.url);
      if (!res.ok) {
        console.log('Failed', c.name, res.status);
        continue;
      }
      const buf = Buffer.from(await res.arrayBuffer());
      const gifPath = `scratch/${c.name}.gif`;
      fs.writeFileSync(gifPath, buf);
      console.log('Downloaded', c.name, buf.length, 'bytes');

      const pngPath = `scratch/frame_${c.name}.png`;
      await sharp(gifPath).png().toFile(pngPath);
      console.log('Generated PNG frame for', c.name);
    } catch (err) {
      console.error(c.name, err.message);
    }
  }
}

downloadAndInspect();
