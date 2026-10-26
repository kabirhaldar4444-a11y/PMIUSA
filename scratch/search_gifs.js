async function searchTenor(query) {
  try {
    const res = await fetch('https://tenor.com/search/' + encodeURIComponent(query) + '-gifs');
    const html = await res.text();
    const matches = [...html.matchAll(/https:\/\/media\.tenor\.com\/[^"'\s]+?\.gif/g)].map(m => m[0]);
    console.log(query, 'found:', [...new Set(matches)].slice(0, 6));
  } catch (e) {
    console.error(e.message);
  }
}

(async () => {
  await searchTenor('call-center-headset');
  await searchTenor('corporate-meeting-discussion');
})();
