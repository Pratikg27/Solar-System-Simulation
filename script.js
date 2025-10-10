// Planet information database (unchanged)
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

function showInfo(name, element = null) {
  console.log("showInfo called for:", JSON.stringify(name));

  // Remove highlight from previously selected body
  if (currentSelectedBody) {
    currentSelectedBody.classList.remove("selected");
    currentSelectedBody = null;
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

  // Find and highlight the celestial body if element not provided (for search)
  let targetElement = element;
  if (!targetElement) {
    targetElement = document.querySelector(`[data-name="${name}"]`);
  }
  if (targetElement && targetElement.classList.contains("celestial-body")) {
    targetElement.classList.add("selected");
    currentSelectedBody = targetElement;
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

// ------------------- Hover/Touch Previews -------------------
function handlePreview(e, show = true) {
  const body = e.target ? e.target.closest(".celestial-body") : e;
  if (!body || !solarSystemContainer.contains(body)) return;

  const name = (body.dataset.name || "").trim();
  const data = planetInfo[name];
  const hoverPreview = body.querySelector(".hover-preview");

  if (hoverPreview) {
    if (show && data && data.shortFact) {
      hoverPreview.textContent = data.shortFact;
    } else if (show) {
      hoverPreview.textContent = name; // Fallback to just name
    }
    hoverPreview.style.opacity = show ? "1" : "0";
    hoverPreview.style.visibility = show ? "visible" : "hidden";
  }
}

// Mouse events (for desktop)
solarSystemContainer.addEventListener("mouseover", (e) => {
  handlePreview(e, true);
});

solarSystemContainer.addEventListener("mouseout", (e) => {
  handlePreview(e, false);
});

// Touch events (for mobile) - Simulate hover on touch
solarSystemContainer.addEventListener("touchstart", (e) => {
  if (e.touches.length > 1) return; // Ignore multi-touch
  const touch = e.touches[0];
  const target = document.elementFromPoint(touch.clientX, touch.clientY);
  const body = target ? target.closest(".celestial-body") : null;
  if (body && solarSystemContainer.contains(body)) {
    e.preventDefault(); // Prevent page scroll on touch
    handlePreview(body, true); // Show preview on touch
  }
}, { passive: false }); // Non-passive to allow preventDefault

solarSystemContainer.addEventListener("touchend", (e) => {
  // Brief delay to show preview, then hide (simulates quick tooltip)
  setTimeout(() => {
    const touch = e.changedTouches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    const body = target ? target.closest(".celestial-body") : null;
    if (body && solarSystemContainer.contains(body)) {
      handlePreview(body, false); // Hide preview after touch ends
    }
  }, 150); // Short delay for visibility
}, { passive: true });

// Ensure touch click still works for info panel (already handled by click event delegation)


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

  // Apply speed to all animations using CSS custom property
  const multiplier = speed; // Direct multiplier for speed (higher = faster)
  document.documentElement.style.setProperty('--animation-speed-multiplier', multiplier);
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

// ------------------- Search Dropdown Logic -------------------
const searchLink = document.getElementById("searchLink");
const searchDropdown = document.getElementById("searchDropdown");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
let isDropdownOpen = false;

// Toggle search dropdown
searchLink.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation(); // Prevent bubbling to document click

  if (isDropdownOpen) {
    closeSearchDropdown();
  } else {
    openSearchDropdown();
  }
});

// Open dropdown
function openSearchDropdown() {
  searchDropdown.classList.add("active");
  isDropdownOpen = true;
  searchInput.focus(); // Auto-focus input
  searchInput.value = ""; // Clear input
  updateSearchResults(""); // Clear results
}

// Close dropdown
function closeSearchDropdown() {
  searchDropdown.classList.remove("active");
  isDropdownOpen = false;
  searchInput.value = ""; // Clear input
}

// Handle search input (real-time filtering)
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.trim().toLowerCase();
  updateSearchResults(query);
});

// Handle Enter key to search (optional, since it's real-time)
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const query = e.target.value.trim().toLowerCase();
    updateSearchResults(query);
  }
});

// Handle Escape key to close dropdown
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSearchDropdown();
  }
});

// Function to update search results
function updateSearchResults(query) {
  searchResults.innerHTML = ""; // Clear previous results

  if (!query) {
    const noQueryMsg = document.createElement("p");
    noQueryMsg.textContent = "Start typing to search for celestial bodies...";
    searchResults.appendChild(noQueryMsg);
    return;
  }

  const matches = Object.keys(planetInfo).filter(name => 
    name.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    const noResultsMsg = document.createElement("p");
    noResultsMsg.textContent = "No results found. Try another name (e.g., Earth, Moon, Jupiter).";
    searchResults.appendChild(noResultsMsg);
    return;
  }

  // Display matching results
  matches.forEach(name => {
    const resultDiv = document.createElement("div");
    resultDiv.textContent = name;
    resultDiv.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent closing on click
      showInfo(name); // Calls showInfo without element (it will auto-find)
      closeSearchDropdown(); // Close dropdown
    });
    searchResults.appendChild(resultDiv);
  });
}

// Close dropdown on outside click
document.addEventListener("click", (e) => {
  if (isDropdownOpen && !searchDropdown.contains(e.target) && e.target !== searchLink) {
    closeSearchDropdown();
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
