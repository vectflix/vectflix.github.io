// Load data.json and render cards
async function loadMovies() {
  const response = await fetch('data.json');
  const movies = await response.json();
  const grid = document.getElementById('grid');
  grid.innerHTML = '';

  movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-category', movie.category);

    card.innerHTML = `
      <img src="${movie.thumbnail}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <a href="${movie.link}" target="_blank">Watch Now</a>
    `;
    grid.appendChild(card);
  });
}

// Search filter
document.getElementById('searchBar').addEventListener('keyup', function() {
  const query = this.value.toLowerCase();
  document.querySelectorAll('.card').forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = title.includes(query) ? 'block' : 'none';
  });
});

// Category filter
document.querySelectorAll('.filters button').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    document.querySelectorAll('.card').forEach(card => {
      card.style.display = (filter === 'all' || card.getAttribute('data-category') === filter) ? 'block' : 'none';
    });
  });
});

// Run on page load
loadMovies();
