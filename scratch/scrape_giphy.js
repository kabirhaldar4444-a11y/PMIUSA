async function getGiphyData(term) {
  try {
    const res = await fetch(`https://giphy.com/search/${encodeURIComponent(term)}`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    const html = await res.text();
    const match = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
    if (match) {
      const data = JSON.parse(match[1]);
      const gifs = data?.props?.pageProps?.searchResponse?.data || [];
      console.log(term, 'found count:', gifs.length);
      gifs.slice(0, 10).forEach((g, i) => {
        console.log(`[${i}] ${g.title}: https://media.giphy.com/media/${g.id}/giphy.gif`);
      });
    } else {
      console.log('No NEXT_DATA for', term);
    }
  } catch (e) {
    console.error('Error:', e.message);
  }
}

(async () => {
  await getGiphyData('customer-service-headset');
  await getGiphyData('office-meeting-teamwork');
})();
