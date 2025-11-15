import { qs, qsa, createEl, storage, slugify, truncate } from "./utils.js";

const DATA_URL = "data/movies.json";
const WATCHLIST_KEY = "vectflix_watchlist";

let MOVIES = [];

init();

async function init() {
  // Footer year
  qs("#year").textContent = new Date().getFullYear();

  // Load data
  try {
    const res = await fetch(DATA_URL);
    MOVIES = await res.json();
  } catch (e) {
    console.error("Failed to load movies.json", e);
    MOVIES = [];
  }

  renderHero();
  renderAll();
  bindEvents();
}

function bindEvents() {
  // Search filter
  qs("#searchInput").addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    const results = MOVIES.filter(m =>
      (m.title || "").toLowerCase().includes(q) ||
      String(m.year || "").includes(q)
    );
    renderGrid(results, qs("#row-all"));
  });

  // Navigation: My List
  qsa(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;
      if (filter === "watchlist") {
        const wlKeys = storage.get(WATCHLIST_KEY);
        const wlMovies = MOVIES.filter(m => wlKeys.includes(movieKey(m)));
        renderGrid(wlMovies, qs("#row-all"));
      } else {
        renderAll();
      }
    });
  });

  // Modal close
  qs("#modalClose").addEventListener("click", closeModal);
  qs("#movieModal").addEventListener("click", (e) => {
    if (e.target.id === "movieModal") closeModal();
  });
}

function movieKey(m) {
  // Use a stable key derived from title + year or fall back to link
  const base = `${m.title || ""}-${m.year || ""}`;
  const s = slugify(base);
  return s || slugify(m.link || "");
}

function renderHero() {
  const hero = qs("#hero");
  const pick = MOVIES[0];
  hero.innerHTML = `
    <h1>VECTFLIX</h1>
    <p>${pick ? truncate(`Now featuring: ${pick.title} (${pick.year}). Browse, search, and jump straight to the watch link.`) : "Discover and track movies. Add thumbnails and watch links easily via JSON."}</p>
    <div class="vf-actions">
      <a class="vf-btn" href="${pick ? pick.link : "#"}" target="_blank" rel="noopener">${pick ? `Watch ${pick.title}` : "Get started"}</a>
      <button class="vf-btn secondary" id="heroList">${pick ? "+ My List" : "Refresh"}</button>
    </div>
  `;
  if (pick) {
    qs("#heroList").addEventListener("click", () => {
      toggleWatchlist(movieKey(pick));
      renderAll();
    });
  }
}

function renderAll() {
  renderGrid(MOVIES, qs("#row-all"));
}

function renderGrid(list, container) {
  container.innerHTML = "";
  if (!list.length) {
    container.innerHTML = `<p style="color:#a0a0aa">No movies found.</p>`;
    return;
  }

  list.forEach(m => {
    const key = movieKey(m);
    const card = createEl("article", { className: "vf-card", attrs: { "data-key": key } });
    const wl = storage.get(WATCHLIST_KEY);
    const inList = wl.includes(key);

    card.innerHTML = `
      ${inList ? `<span class="vf-badge">My List</span>` : ""}
      <img src="${m.poster}" alt="${m.title} poster" />
      <div class="vf-card-info">
        <strong>${m.title}</strong>
        <div style="color:#a0a0aa; font-size:12px;">${m.year || ""}</div>
      </div>
    `;
    card.addEventListener("click", () => openModal(m));
    container.appendChild(card);
  });
}

function openModal(movie) {
  const modal = qs("#movieModal");
  const body = qs("#modalBody");
  modal.hidden = false;

  const key = movieKey(movie);
  const wlIds = storage.get(WATCHLIST_KEY);
  const inList = wlIds.includes(key);

  body.innerHTML = `
    <div class="vf-modal-inner">
      <div class="vf-modal-poster">
        <img src="${movie.poster}" alt="${movie.title} poster" />
      </div>
      <div class="vf-detail">
        <h3>${movie.title} <span style="color:#a0a0aa; font-weight:400;">(${movie.year || ""})</span></h3>
        <p style="color:#a0a0aa">Open the external watch link below.</p>
        <div class="vf-actions">
          <a class="vf-btn" href="${movie.link}" target="_blank" rel="noopener">▶ Watch Now</a>
          <button class="vf-btn secondary" id="toggleList">${inList ? "− Remove from List" : "+ Add to List"}</button>
        </div>
      </div>
    </div>
  `;

  qs("#toggleList").addEventListener("click", () => {
    toggleWatchlist(key);
    openModal(movie); // re-render to reflect button state
  });
}

function closeModal() {
  qs("#movieModal").hidden = true;
}

function toggleWatchlist(key) {
  const wl = storage.get(WATCHLIST_KEY);
  const idx = wl.indexOf(key);
  if (idx === -1) wl.push(key);
  else wl.splice(idx, 1);
  storage.set(WATCHLIST_KEY, wl);
}
