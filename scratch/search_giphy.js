async function searchGiphy(q) {
  try {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=${encodeURIComponent(q)}&limit=10&rating=g`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.data) {
      console.log(q, 'Giphy results:');
      data.data.forEach((item, i) => {
        console.log(`[${i}] ${item.title}: ${item.images.original.url}`);
      });
    } else {
      console.log('No data:', data);
    }
  } catch (e) {
    console.error('Error:', e.message);
  }
}

(async () => {
  await searchGiphy('customer support agent headset');
  await searchGiphy('office team collaboration meeting');
})();
