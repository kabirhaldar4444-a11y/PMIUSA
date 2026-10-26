async function check() {
  for (const branch of ['main', 'master']) {
    try {
      const res = await fetch(`https://raw.githubusercontent.com/ramesh-852000/cool-gifs-for-github/${branch}/README.md`);
      if (res.ok) {
        const text = await res.text();
        console.log(branch, 'length:', text.length);
        const matches = [...text.matchAll(/https:\/\/[^\s"'<>\)]+\.gif/g)].map(m => m[0]);
        console.log('GIFs found:', matches.slice(0, 15));
        return;
      }
    } catch (e) {
      console.error(e.message);
    }
  }
}
check();
