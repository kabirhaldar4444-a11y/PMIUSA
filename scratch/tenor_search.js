async function getTenorGifs() {
  const queries = ['customer-support-agent', 'it-support', 'software-developer', 'team-collaboration'];
  for (const q of queries) {
    try {
      const res = await fetch(`https://tenor.com/search/${q}-gifs`, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
      });
      const html = await res.text();
      // Tenor embeds json or media.tenor.com urls
      const urls = [...html.matchAll(/https:\/\/media\.tenor\.com\/[a-zA-Z0-9_\-]+\/[a-zA-Z0-9_\-]+\.gif/g)].map(m => m[0]);
      console.log(q, 'matches:', [...new Set(urls)].slice(0, 5));
    } catch (e) {
      console.error(q, e.message);
    }
  }
}
getTenorGifs();
