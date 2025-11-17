
document.addEventListener("DOMContentLoaded", () => {
  const movies = {
    series: [
      { title: "Stranger Things 5 – First 5 Minutes", link: "https://www.youtube.com/watch?v=vhFPHYgILN0", thumbnail: "https://img.youtube.com/vi/vhFPHYgILN0/maxresdefault.jpg" },
      { title: "KAOS S1 EP1", link: "https://ww1.goojara.to/eWkApj", thumbnail: "https://i.pinimg.com/1200x/a4/72/d7/a472d7383d33d82ed7aaf14438ed38b2.jpg" },
      { title: "KAOS S1 EP2", link: "https://ww1.goojara.to/eVwBVP", thumbnail: "https://i.pinimg.com/1200x/a4/72/d7/a472d7383d33d82ed7aaf14438ed38b2.jpg" },
      { title: "KAOS S1 EP3", link: "https://ww1.goojara.to/epQXdp", thumbnail: "https://i.pinimg.com/1200x/a4/72/d7/a472d7383d33d82ed7aaf14438ed38b2.jpg" },
      { title: "KAOS S1 EP4", link: "https://ww1.goojara.to/ekDd5Z", thumbnail: "https://i.pinimg.com/1200x/a4/72/d7/a472d7383d33d82ed7aaf14438ed38b2.jpg" },
      { title: "KAOS S1 EP5", link: "https://ww1.goojara.to/eN9Wd7", thumbnail: "https://i.pinimg.com/1200x/a4/72/d7/a472d7383d33d82ed7aaf14438ed38b2.jpg" },
      { title: "KAOS S1 EP6", link: "https://ww1.goojara.to/exGqVz", thumbnail: "https://i.pinimg.com/1200x/a4/72/d7/a472d7383d33d82ed7aaf14438ed38b2.jpg" },
      { title: "KAOS S1 EP7", link: "https://ww1.goojara.to/eqGPDg", thumbnail: "https://i.pinimg.com/1200x/a4/72/d7/a472d7383d33d82ed7aaf14438ed38b2.jpg" },
      { title: "KAOS S1 EP8", link: "https://ww1.goojara.to/e6M8k6", thumbnail: "https://i.pinimg.com/1200x/a4/72/d7/a472d7383d33d82ed7aaf14438ed38b2.jpg" },
      { title: "The Conjuring: Last Rites (2025)", link: "https://ww1.goojara.to/m1eZL5", thumbnail: "https://i.pinimg.com/1200x/76/3b/7d/763b7de1e68b213723bf35b30b3d54d6.jpg" },
      { title: "IT: Welcome to Derry S1 EP1", link: "https://ww1.goojara.to/evpq4L", thumbnail: "https://i.pinimg.com/736x/f9/6d/b7/f96db71c6ddb86bb62697a5366228119.jpg" },
      { title: "IT: Welcome to Derry S1 EP2", link: "https://ww1.goojara.to/e4W0BM", thumbnail: "https://i.pinimg.com/736x/f9/6d/b7/f96db71c6ddb86bb62697a5366228119.jpg" },
      { title: "IT: Welcome to Derry S1 EP3", link: "https://ww1.goojara.to/e4W0BM", thumbnail: "https://i.pinimg.com/736x/f9/6d/b7/f96db71c6ddb86bb62697a5366228119.jpg" },
      { title: "Wednesday S1 EP1", link: "https://ww1.goojara.to/eZD6ve", thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg" },
      { title: "Wednesday S1 EP2", link: "https://ww1.goojara.to/e06bzr", thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg" },
      { title: "Wednesday S1 EP3", link: "https://ww1.goojara.to/e764eL", thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg" },
      { title: "Wednesday S1 EP4", link: "https://ww1.goojara.to/ejPO1w", thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg" },
      { title: "Wednesday S1 EP5", link: "https://ww1.goojara.to/evpkvA", thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg" },
      { title: "Wednesday S1 EP6", link: "https://ww1.goojara.to/eyPz2w", thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg" },
      { title: "Wednesday S1 EP7", link: "https://ww1.goojara.to/erAPZA", thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg" },
      { title: "Wednesday S1 EP8", link: "https://ww1.goojara.to/e2ab1x", thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg" },
      { title: "Wednesday S2 EP1", link: "https://ww1.goojara.to/eyPAMO", thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg" },
      { title: "Wednesday S2 EP2", link: "https://ww1.goojara.to/erAp5j", thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg" },
      { title: "Wednesday S2 EP3", link: "https://ww1.goojara.to/e2aeN5", thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg" },
      { title: "Wednesday S2 EP4", link: "https://ww1.goojara.to/eJRpjp", thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg" },
      { title: "Wednesday S2 EP5", link: "https://ww1.goojara.to/eN9zGr", thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg" },
      { title: "Wednesday S2 EP6", link: "https://ww1.goojara.to/exGBO5", thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg" },
      { title: "Wednesday S2 EP7", link: "https://ww1.goojara.to/eqGVy8", thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg" },
      { title: "Wednesday S2 EP8", link: "https://ww1.goojara.to/e6Mjrj", thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg" },
      { title: "Gen V S1  EP1 ", link: "https://ww1.goojara.to/eab8jW", thumbnail: "https://i.pinimg.com/736x/9c/b1/43/9cb143eedc1f5a407b2d3c58569c3396.jpg" },
      { title: "Gen V S1  EP2 ", link: "https://ww1.goojara.to/eOeDQy", thumbnail: "https://i.pinimg.com/736x/9c/b1/43/9cb143eedc1f5a407b2d3c58569c3396.jpg" },
      { title: "Gen V S1  EP3 ", link: "https://ww1.goojara.to/ellLdM", thumbnail: "https://i.pinimg.com/736x/9c/b1/43/9cb143eedc1f5a407b2d3c58569c3396.jpg" },
      { title: "Gen V S1  EP4 ", link: "https://ww1.goojara.to/enkO1l", thumbnail: "https://i.pinimg.com/736x/9c/b1/43/9cb143eedc1f5a407b2d3c58569c3396.jpg" },
      { title: "Gen V S1  EP5 ", link: "https://ww1.goojara.to/eeQjka", thumbnail: "https://i.pinimg.com/736x/9c/b1/43/9cb143eedc1f5a407b2d3c58569c3396.jpg" },
      { title: "Gen V S1  EP6 ", link: "https://ww1.goojara.to/eN9drn", thumbnail: "https://i.pinimg.com/736x/9c/b1/43/9cb143eedc1f5a407b2d3c58569c3396.jpg" },
      { title: "Gen V S1  EP7 ", link: "https://ww1.goojara.to/e9WqMQ", thumbnail: "https://i.pinimg.com/736x/9c/b1/43/9cb143eedc1f5a407b2d3c58569c3396.jpg" },
      { title: "Gen V S1  EP8 ", link: "https://ww1.goojara.to/ekD5kE", thumbnail: "https://i.pinimg.com/736x/9c/b1/43/9cb143eedc1f5a407b2d3c58569c3396.jpg" },
      { title: "Gen V S2  EP1 ", link: "https://ww1.goojara.to/eXnEmv", thumbnail: "https://i.pinimg.com/736x/9c/b1/43/9cb143eedc1f5a407b2d3c58569c3396.jpg" },
      { title: "Gen V S2  EP2 ", link: "https://ww1.goojara.to/ePLBVg", thumbnail: "https://i.pinimg.com/736x/9c/b1/43/9cb143eedc1f5a407b2d3c58569c3396.jpg" },
      { title: "Gen V S2  EP3 ", link: "https://ww1.goojara.to/eWk4ra", thumbnail: "https://i.pinimg.com/736x/9c/b1/43/9cb143eedc1f5a407b2d3c58569c3396.jpg" },
      { title: "Gen V S2  EP4 ", link: "https://ww1.goojara.to/epQWAk", thumbnail: "https://i.pinimg.com/736x/9c/b1/43/9cb143eedc1f5a407b2d3c58569c3396.jpg" },
      { title: "Gen V S2  EP5 ", link: "https://ww1.goojara.to/eGQPmN", thumbnail: "https://i.pinimg.com/736x/9c/b1/43/9cb143eedc1f5a407b2d3c58569c3396.jpg" },
      { title: "Gen V S2  EP6 ", link: "https://ww1.goojara.to/egEOgy", thumbnail: "https://i.pinimg.com/736x/9c/b1/43/9cb143eedc1f5a407b2d3c58569c3396.jpg" },
      { title: "Gen V S2  EP7 ", link: "https://ww1.goojara.to/eyPAgR", thumbnail: "https://i.pinimg.com/736x/9c/b1/43/9cb143eedc1f5a407b2d3c58569c3396.jpg" },
      { title: "Gen V S2  EP8 ", link: "https://ww1.goojara.to/eabrA0", thumbnail: "https://i.pinimg.com/736x/9c/b1/43/9cb143eedc1f5a407b2d3c58569c3396.jpg" }
   ],
    sciFiAction: [
      { title: "Madame Web", link: "https://ww1.goojara.to/mLRzxj", thumbnail: "https://i.pinimg.com/736x/4c/26/7a/4c267a6e7a1dee8aa9e3038c52b0fc7f.jpg" },
      { title: "Ghostbusters: Afterlife", link: "https://ww1.goojara.to/mPLbxB", thumbnail: "https://i.pinimg.com/736x/e3/da/95/e3da9593b2c029f9cf980a474cebcf80.jpg" },
      { title: "Frankenstein (2025)", link: "https://ww1.goojara.to/mJRNdD", thumbnail: "https://i.pinimg.com/1200x/d6/09/1a/d6091a76cf4995d5a9d49db700fc73a0.jpg" },
      { title: "The Matrix", link: "https://ww1.goojara.to/m30Xp3", thumbnail: "https://i.pinimg.com/736x/ed/45/16/ed4516338fa5df348c13a2a7ce1e7998.jpg" },
      { title: "Nobody", link: "https://ww1.goojara.to/mqG4E8", thumbnail: "https://i.pinimg.com/736x/b4/5a/bc/b45abcbfcdd23c32abfcbfed131f0bb5.jpg" },
      { title: "Nobody 2", link: "https://ww1.goojara.to/mLRqww", thumbnail: "https://i.pinimg.com/1200x/78/03/eb/7803eb0afc71d821b4c768f32bb01caf.jpg" }
    ],
    familyAnimation: [
      { title: "Bad Guys 2", link: "https://ww1.goojara.to/mZDwVe", thumbnail: "https://i.pinimg.com/736x/f4/3d/33/f43d33f2ab89e2fc0901230fdd319a9a.jpg" },
      { title: "KPop Demon Hunters", link: "https://ww1.goojara.to/m5Qv6R", thumbnail: "https://i.pinimg.com/1200x/4b/86/e1/4b86e18b0a43210ff79558f3ed211b62.jpg" },
      { title: "The Twits", link: "https://ww1.goojara.to/mRzeXn", thumbnail: "https://i.pinimg.com/736x/76/0e/a6/760ea62964806342dc5499a65b361950.jpg" },
      { title: "Sneaks", link: "https://ww1.goojara.to/m06AVr", thumbnail: "https://i.pinimg.com/1200x/d3/6c/83/d36c83753580f8849bc01fae7f28f131.jpg" },
      { title: "Elio", link: "https://ww1.goojara.to/mzERGj", thumbnail: "https://i.pinimg.com/736x/03/35/08/033508397c8971ca22f046b901265afe.jpg" }
    ],
    dramaBlockbusters: [
      { title: "The Furioza", link: "https://ww1.goojara.to/mZDbbr", thumbnail: "https://i.pinimg.com/1200x/b1/5b/a4/b15ba4514a2058c48bbd8eec6060d666.jpg" },
      { title: "Roofman 2025", link: "https://ww1.goojara.to/mrARxA", thumbnail: "https://i.pinimg.com/736x/03/80/b2/0380b2319ded86900ce14fd5c3e81364.jpg" },
      { title: "Black phone", link: "https://ww1.goojara.to/mjP4Jx", thumbnail: "https://i.pinimg.com/1200x/d4/38/c0/d438c0273786d7f3463fd021be98add4.jpg" },
      { title: "Black phone 2", link: "https://ww1.goojara.to/mvpeQA", thumbnail: "https://i.pinimg.com/1200x/56/3d/4c/563d4c11593a3e371bec51daeb148657.jpg" },
      { title: "Good Fortune (2025)", link: "https://ww1.goojara.to/m2a0rx", thumbnail: "https://i.pinimg.com/1200x/1b/82/2b/1b822b5345a8a55a137215e90ae2167b.jpg" },
      { title: "The Roses", link: "https://ww1.goojara.to/mwORVx", thumbnail: "https://i.pinimg.com/1200x/19/e8/36/19e8363c5aef0f985ad3eed5bcbfa983.jpg" }
    ]
  };

  function createPosterCard(movie) {
    const a = document.createElement("a");
    a.className = "poster-card";
    a.href = movie.link;
    a.target = "_blank";

    const img = document.createElement("img");
    img.src = movie.thumbnail;
    img.alt = movie.title;

    const p = document.createElement("p");
    p.textContent = movie.title;

    a.appendChild(img);
    a.appendChild(p);
    return a;
  }

  function renderRow(rowId, movieList) {
    const rowDiv = document.getElementById(rowId);
    if (!rowDiv) return;
    rowDiv.innerHTML = "";
    movieList.forEach(movie => rowDiv.appendChild(createPosterCard(movie)));
  }

  renderRow("series-row", movies.series);
  renderRow("scifi-row", movies.sciFiAction);
  renderRow("family-row", movies.familyAnimation);
  renderRow("drama-row", movies.dramaBlockbusters);

  // Scroll buttons
  document.querySelectorAll(".scroll-container").forEach(container => {
    const row = container.querySelector(".row-posters");
    const leftBtn = container.querySelector(".scroll-btn.left");
    const rightBtn = container.querySelector(".scroll-btn.right");

    leftBtn.addEventListener("click", () => {
      row.scrollBy({ left: -row.clientWidth / 1.5, behavior: "smooth" });
    });
    rightBtn.addEventListener("click", () => {
      row.scrollBy({ left: row.clientWidth / 1.5, behavior: "smooth" });
    });
  });

  // Search functionality
  const searchInput = document.getElementById("movie-search");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();

      function filterRow(rowId, moviesList) {
        const rowDiv = document.getElementById(rowId);
        if (!rowDiv) return;
        rowDiv.innerHTML = "";
        moviesList
          .filter(movie => movie.title.toLowerCase().includes(query))
          .forEach(movie => rowDiv.appendChild(createPosterCard(movie)));
      }

      filterRow("series-row", movies.series);
      filterRow("scifi-row", movies.sciFiAction);
      filterRow("family-row", movies.familyAnimation);
      filterRow("drama-row", movies.dramaBlockbusters);
    });
  }
});





