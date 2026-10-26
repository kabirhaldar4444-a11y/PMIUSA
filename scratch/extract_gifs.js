async function run() {
  const res = await fetch('https://raw.githubusercontent.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/main/README.md');
  const text = await res.text();
  const first = text.indexOf('Work Culture (HD Visuals)');
  const second = text.indexOf('Work Culture (HD Visuals)', first + 30);
  if (second !== -1) {
    console.log(text.slice(second, second + 4000));
  } else {
    console.log('Second occurrence not found');
  }
}
run();
