async function searchCommons(q) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(q + ' filetype:bitmap/gif')}&srnamespace=6&format=json`;
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  const data = await res.json();
  const results = data?.query?.search || [];
  console.log(q, 'Commons count:', results.length);
  for (const r of results.slice(0, 5)) {
    console.log('-', r.title);
  }
}

(async () => {
  await searchCommons('customer service');
  await searchCommons('call center');
  await searchCommons('computer office');
  await searchCommons('programming animation');
})();
