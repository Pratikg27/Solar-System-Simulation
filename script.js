// Planet information database
const planetInfo = {
  "Sun": {
    description: "☀️ The Sun — a G-type main-sequence star that provides light & energy to the Solar System. Contains 99.86% of the system's mass.",
    shortFact: "Our star, 99.86% of solar system mass.",
    stats: {
      "Diameter": "1.39 million km",
      "Core Temperature": "15 million °C",
      "Surface Temperature": "5,778 K",
      "Age": "4.6 billion years",
      "Composition": "73% Hydrogen, 25% Helium"
    }
  },
  "Mercury": {
    description: "☿ Mercury — the smallest planet and closest to the Sun. Experiences extreme temperature variations due to lack of atmosphere.",
    shortFact: "Smallest planet, extreme temps.",
    stats: {
      "Diameter": "4,879 km",
      "Orbital Period": "88 days",
      "Day Length": "59 Earth days",
      "Surface Temp": "-173 to 427 °C",
      "Moons": "0"
    }
  },
  "Venus": {
    description: "♀ Venus — similar in size to Earth but with a toxic atmosphere and extreme greenhouse effect, making it the hottest planet.",
    shortFact: "Hottest planet, Earth's 'twin'.",
    stats: {
      "Diameter": "12,104 km",
      "Orbital Period": "225 days",
      "Day Length": "243 Earth days (retrograde)",
      "Surface Temp": "465 °C",
      "Moons": "0"
    }
  },
  "Earth": {
    description: "🌍 Earth — our home planet and the only known world with life. 70% of its surface is covered by water.",
    shortFact: "Our home, only known life.",
    stats: {
      "Diameter": "12,742 km",
      "Orbital Period": "365.25 days",
      "Day Length": "24 hours",
      "Surface Temp": "-88 to 58 °C",
      "Moons": "1 (Moon)"
    }
  },
  "Moon": {
    description: "🌙 The Moon — Earth's only natural satellite. Influences tides and stabilizes Earth's axial tilt.",
    shortFact: "Earth's only natural satellite.",
    stats: {
      "Diameter": "3,474 km",
      "Orbital Period": "27.3 days",
      "Distance from Earth": "384,400 km",
      "Surface Temp": "-173 to 127 °C"
    }
  },
  "Mars": {
    description: "♂ Mars — the Red Planet. Known for its iron oxide-rich soil, dust storms, and the tallest volcano in the solar system (Olympus Mons).",
    shortFact: "The Red Planet, Olympus Mons.",
    stats: {
      "Diameter": "6,779 km",
      "Orbital Period": "687 days",
      "Day Length": "24.6 hours",
      "Surface Temp": "-125 to 20 °C",
      "Moons": "2 (Phobos, Deimos)"
    }
  },
  "Jupiter": {
    description: "♃ Jupiter — the largest planet in the Solar System. Famous for its Great Red Spot, a giant storm lasting centuries.",
    shortFact: "Largest planet, Great Red Spot.",
    stats: {
      "Diameter": "139,820 km",
      "Orbital Period": "12 years",
      "Day Length": "10 hours",
      "Surface Temp": "-145 °C",
      "Moons": "95+ (Io, Europa, Ganymede, Callisto, etc.)"
    }
  },
  "Jupiter's Moon": {
    description: "🛰️ One of Jupiter's many moons — examples include Europa, Ganymede, Io, and Callisto. Europa may have a subsurface ocean beneath its icy crust.",
    shortFact: "Many moons, Europa has ocean.",
    stats: {
      "Largest Moon": "Ganymede (5,268 km)",
      "Interesting Fact": "Europa may have a subsurface ocean beneath its icy crust."
    }
  },
  "Saturn": {
    description: "♄ Saturn — known for its stunning ring system made of ice and rock particles. A gas giant similar to Jupiter.",
    shortFact: "Famous rings, gas giant.",
    stats: {
      "Diameter": "116,460 km",
      "Orbital Period": "29 years",
      "Day Length": "10.7 hours",
      "Surface Temp": "-178 °C",
      "Moons": "145+ (Titan is the largest)"
    }
  },
  "Saturn's Moon": {
    description: "🛰️ Saturn's moons — Titan is the largest, bigger than Mercury, and has lakes of liquid methane. Enceladus ejects water plumes, hinting at subsurface oceans.",
    shortFact: "Titan (larger than Mercury), Enceladus plumes.",
    stats: {
      "Largest Moon": "Titan (5,150 km)",
      "Interesting Fact": "Enceladus ejects water plumes, hinting at subsurface oceans."
    }
  },
  "Uranus": {
    description: "♅ Uranus — an ice giant with a tilted axis of 98°, making it roll on its side as it orbits the Sun.",
    shortFact: "Ice giant, rotates on its side.",
    stats: {
      "Diameter": "50,724 km",
      "Orbital Period": "84 years",
      "Day Length": "17 hours",
      "Surface Temp": "-224 °C",
      "Moons": "27 (Miranda, Ariel, Titania, Oberon, Umbriel)"
    }
  },
  "Neptune": {
    description: "♆ Neptune — the farthest planet from the Sun. Known for supersonic winds and deep blue color caused by methane.",
    shortFact: "Farthest planet, supersonic winds.",
    stats: {
      "Diameter": "49,244 km",
      "Orbital Period": "165 years",
      "Day Length": "16 hours",
      "Surface Temp": "-214 °C",
      "Moons": "14 (Triton is the largest)"
    }
  }
};

// ------------------- Info Panel Logic -------------------
const infoPanel = document.getElementById("infoPanel");
const planetNameEl = document.getElementById("planetName");
const planetDetailsEl = document.getElementById("planetDetails");
const planetStatsEl = document.getElementById("planetStats");
const closeBtn = document.querySelector(".info-close-btn");
const moreInfoLink = document.getElementById("moreInfoLink"); // Get the anchor tag

let currentSelectedBody = null; // To keep track of the currently selected body

function showInfo(name, element) {
  console.log("showInfo called for:", JSON.stringify(name));

  // Remove highlight from previously selected body
  if (currentSelectedBody) {
    currentSelectedBody.classList.remove("selected");
  }

  const data = planetInfo[name];
  if (!data) {
    console.warn("No data found for:", name);
    planetNameEl.textContent = name || "Unknown object";
    planetDetailsEl.textContent = "No information available for this object.";
    planetStatsEl.innerHTML = "";
    moreInfoLink.style.display = "none"; // Hide the button if no data
    infoPanel.style.display = "block";
    return;
  }

  planetNameEl.textContent = name;
  planetDetailsEl.textContent = data.description;

  // Clear stats
  planetStatsEl.innerHTML = "";

  for (let key in data.stats) {
    const p = document.createElement("p");
    p.textContent = `${key}: ${data.stats[key]}`;
    planetStatsEl.appendChild(p);
  }

  // Update "View More Details" link dynamically
  moreInfoLink.href = `/info/planet.html?planet=${encodeURIComponent(name)}`;
  moreInfoLink.style.display = "block"; // Show the button

  infoPanel.style.display = "block";

  // Add highlight to the current selected body
  if (element) {
    element.classList.add("selected");
    currentSelectedBody = element;
  }
}

closeBtn.addEventListener("click", () => {
  infoPanel.style.display = "none";
  // Remove highlight when panel is closed
  if (currentSelectedBody) {
    currentSelectedBody.classList.remove("selected");
    currentSelectedBody = null;
  }
});

// ------------------- Event Delegation for Celestial Bodies -------------------
const solarSystemContainer = document.getElementById("solarSystem");
solarSystemContainer.addEventListener("click", (e) => {
  const body = e.target.closest(".celestial-body");
  if (!body || !solarSystemContainer.contains(body)) return;

  const name = (body.dataset.name || "").trim();
  console.log("Clicked:", name);
  showInfo(name, body); // Pass the clicked element to showInfo
});

// ------------------- Hover Previews -------------------
solarSystemContainer.addEventListener("mouseover", (e) => {
  const body = e.target.closest(".celestial-body");
  if (!body || !solarSystemContainer.contains(body)) return;

  const name = (body.dataset.name || "").trim();
  const data = planetInfo[name];
  const hoverPreview = body.querySelector(".hover-preview");

  if (hoverPreview && data && data.shortFact) {
    hoverPreview.textContent = data.shortFact;
  } else if (hoverPreview) {
    hoverPreview.textContent = name; // Fallback to just name
  }
});


// ------------------- Pause / Resume -------------------
const solarSystem = document.getElementById("solarSystem");
const pauseBtn = document.getElementById("pauseBtn");
const resumeBtn = document.getElementById("resumeBtn");

pauseBtn.addEventListener("click", () => {
  solarSystem.classList.add("paused");
});

resumeBtn.addEventListener("click", () => {
  solarSystem.classList.remove("paused");
});

// ------------------- Zoom Controls -------------------
let scale = 1;
const zoomInBtn = document.getElementById("zoomInBtn");
const zoomOutBtn = document.getElementById("zoomOutBtn");
const resetViewBtn = document.getElementById("resetViewBtn");

zoomInBtn.addEventListener("click", () => {
  scale += 0.1;
  solarSystem.style.transform = `scale(${scale})`;
  solarSystem.classList.add("zoomed");
});

zoomOutBtn.addEventListener("click", () => {
  scale = Math.max(0.3, scale - 0.1);
  solarSystem.style.transform = `scale(${scale})`;
  solarSystem.classList.add("zoomed");
});

resetViewBtn.addEventListener("click", () => {
  scale = 1;
  solarSystem.style.transform = "scale(1)";
  solarSystem.classList.remove("zoomed");
});

// ------------------- Speed Control -------------------
const speedSlider = document.getElementById("speedSlider");
const currentSpeedSpan = document.getElementById("currentSpeed");

speedSlider.addEventListener("input", (e) => {
  const speed = parseFloat(e.target.value);
  currentSpeedSpan.textContent = `${speed}x`;

  // Apply speed to all animations
  document.documentElement.style.setProperty('--animation-speed-multiplier', 1 / speed);
});

// Set initial speed multiplier
document.documentElement.style.setProperty('--animation-speed-multiplier', 1);


// ------------------- About Modal -------------------
const aboutBtn = document.getElementById("aboutBtn");
const aboutModal = document.getElementById("aboutModal");
const closeModal = document.querySelector(".close-modal");

aboutBtn.addEventListener("click", () => {
  aboutModal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  aboutModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === aboutModal) {
    aboutModal.style.display = "none";
  }
});

// ------------------- Header Scroll Effect -------------------
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ------------------- Smooth Scrolling for Navigation -------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    if (!href || href === '#') return;  // Skip invalid or empty hash links

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


// ------------------- Search Functionality -------------------
// Elements
const searchBtn = document.getElementById("searchBtn");
const searchModal = document.getElementById("searchModal");
const closeSearchBtn = document.getElementById("closeSearchBtn");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const searchError = document.getElementById("searchError");

let searchTimeout; // For debouncing (prevents too many searches while typing)

// Step 1: Open modal on button click
searchBtn.addEventListener("click", () => {
  searchModal.style.display = "flex";
  searchInput.focus(); // Auto-focus input
  searchResults.innerHTML = ""; // Clear previous results
  searchError.style.display = "none";
});

// Step 2: Close modal
closeSearchBtn.addEventListener("click", () => {
  closeSearchModal();
});

function closeSearchModal() {
  searchModal.style.display = "none";
  searchInput.value = "";
  searchResults.innerHTML = "";
  searchResults.classList.remove("show");
  searchError.style.display = "none";
}

// Close on outside click
searchModal.addEventListener("click", (e) => {
  if (e.target === searchModal) {
    closeSearchModal();
  }
});

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && searchModal.style.display === "flex") {
    closeSearchModal();
  }
});

// Step 3: Handle input (debounced search)
searchInput.addEventListener("input", (e) => {
  clearTimeout(searchTimeout);
  const query = e.target.value.trim();
  if (query.length === 0) {
    searchResults.innerHTML = "";
    searchResults.classList.remove("show");
    searchError.style.display = "none";
    return;
  }
  // Debounce: Wait 300ms after typing stops
  searchTimeout = setTimeout(() => {
    if (query.length >= 2) { // Minimum 2 chars for search
      performSearch(query.toLowerCase());
    } else {
      searchResults.innerHTML = "";
      searchResults.classList.remove("show");
    }
  }, 300);
});

// Step 4: Perform search using planetInfo
function performSearch(query) {
  const matches = [];
  for (const name in planetInfo) {
    if (name.toLowerCase().includes(query)) { // Case-insensitive partial match
      matches.push(name);
    }
  }

  if (matches.length > 0) {
    searchError.style.display = "none";
    displaySearchResults(matches);
  } else {
    searchResults.innerHTML = "";
    searchResults.classList.remove("show");
    searchError.style.display = "block";
  }
}

// Step 5: Display results as clickable list
function displaySearchResults(matches) {
  searchResults.innerHTML = "";
  matches.slice(0, 5).forEach((name) => { // Limit to top 5 results
    const item = document.createElement("div");
    item.className = "search-result-item";
    item.innerHTML = `
      <span class="search-result-name">${name}</span>
      <button class="search-result-btn" onclick="openDetailedPage('${name}')">View Full Info</button>
    `;
    // Click entire item to open info panel
    item.addEventListener("click", (e) => {
      if (!e.target.classList.contains("search-result-btn")) {
        selectSearchResult(name);
      }
    });
    searchResults.appendChild(item);
  });
  searchResults.classList.add("show");
}

// Step 6: Select result - Open info panel and highlight body
function selectSearchResult(name) {
  // Find the celestial body element (if exists in simulation)
  const body = document.querySelector(`[data-name="${name}"]`);
  
  // Open info panel (your existing function)
  showInfo(name, body); // This highlights and shows panel
  
  // Smooth scroll to solar system section
  const solarSection = document.getElementById("solar-system");
  if (solarSection) {
    solarSection.scrollIntoView({ behavior: "smooth" });
  }
  
  closeSearchModal();
}

// Step 7: Open detailed page in new tab
function openDetailedPage(name) {
  const url = `/info/planet.html?planet=${encodeURIComponent(name)}`;
  window.open(url, "_blank"); // New tab
  closeSearchModal();
}
