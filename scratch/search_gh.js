async function searchGitHubGifs() {
  const urls = [
    // Famous high quality tech / support / teamwork GIFs in popular GitHub projects
    'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/',
    // Let us check other popular readme gif repos
    'https://raw.githubusercontent.com/DenverCoder1/readme-typing-svg/main/',
  ];
  // Let's search via GitHub public search API
  try {
    const res = await fetch('https://api.github.com/search/code?q=filename:support+extension:gif', {
      headers: { 'User-Agent': 'Node-Fetch' }
    });
    const data = await res.json();
    console.log('GitHub code search count:', data.total_count);
    if (data.items) {
      data.items.slice(0, 5).forEach(i => console.log(i.html_url));
    }
  } catch (e) {
    console.error(e.message);
  }
}
searchGitHubGifs();
