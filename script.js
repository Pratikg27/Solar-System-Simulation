// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Expanded info for planets, moons & sun
  const bodyInfo = {
    Sun: "☀️ The Sun — a G-type main-sequence star. Provides light & energy to the Solar System. Diameter: ~1.39 million km. Core ~15 million °C.",
    Mercury: "☿ Mercury — smallest planet, extreme temps (-180 to 430 °C). Orbital period: 88 days.",
    Venus: "♀ Venus — thick CO₂ atmosphere, runaway greenhouse, surface ~465 °C. Orbital period: 225 days.",
    Earth: "🌍 Earth — our home, water and life, protective atmosphere. Orbital period: 365 days.",
    Moon: "🌙 Moon — Earth's natural satellite, controls tides. Orbital period: ~27.3 days. Diameter: 3,474 km.",
    Mars: "♂ Mars — the Red Planet; dust storms, evidence of ancient water. Orbital period: 687 days.",
    Jupiter: "♃ Jupiter — largest planet, gas giant, Great Red Spot (huge storm). Orbital period: ~12 years.",
    "Jupiter's Moon": "🛰️ Jupiter's large moons (Io, Europa, Ganymede, Callisto). Some (Europa) may have subsurface oceans.",
    Saturn: "♄ Saturn — gas giant with spectacular rings (ice & rock). Orbital period: ~29 years.",
    "Saturn's Moon": "🛰️ Saturn's moons (Titan, Enceladus, etc.). Titan has a thick atmosphere & methane lakes.",
    Uranus: "♅ Uranus — ice giant, tipped on its side (~98° tilt). Orbital period: ~84 years.",
    Neptune: "♆ Neptune — ice giant, extremely windy. Orbital period: ~165 years."
  };

  // -- Normalization helper so names match even if punctuation/spacing differs --
  function normalizeName(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/[’'“”"·]/g, "")      // strip quotes/apostrophes
      .replace(/[^a-z0-9\s]/g, " ")  // turn other punctuation into spaces
      .replace(/\s+/g, " ")          // collapse spaces
      .trim();
  }

  // Build normalized lookup map
  const infoMap = new Map();
  Object.keys(bodyInfo).forEach(k => {
    infoMap.set(normalizeName(k), bodyInfo[k]);
  });

  function lookupInfo(name) {
    const n = normalizeName(name);
    if (infoMap.has(n)) return infoMap.get(n);
    // fallback: try exact raw key
    return bodyInfo[name] || "No details available.";
  }

  // DOM cache
  const infoPanel = document.getElementById("infoPanel");
  const nameEl = document.getElementById("planetName");
  const detailsEl = document.getElementById("planetDetails");
  const pauseBtn = document.getElementById("pauseBtn");
  const resumeBtn = document.getElementById("resumeBtn");

  // Ensure panel has a close button (adds it if not present)
  let closeBtn = infoPanel.querySelector(".info-close-btn");
  if (!closeBtn) {
    closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "info-close-btn";
    closeBtn.innerText = "✕";
    // Place the button at top-right inside the panel
    infoPanel.style.position = infoPanel.style.position || "fixed";
    infoPanel.insertBefore(closeBtn, infoPanel.firstChild);
  }
  closeBtn.addEventListener("click", hideInfo);

  // Show/hide helpers
  function showInfoFor(name) {
    nameEl.textContent = name;
    detailsEl.innerHTML = lookupInfo(name);
    infoPanel.style.display = "block";
    // For accessibility/focus
    infoPanel.setAttribute("aria-hidden", "false");
  }

  function hideInfo() {
    infoPanel.style.display = "none";
    infoPanel.setAttribute("aria-hidden", "true");
  }

  // Add listeners to all elements that have data-name
  const allNamed = Array.from(document.querySelectorAll("[data-name]"));
  allNamed.forEach(el => {
    // Hover (pointerenter) - show info
    el.addEventListener("pointerenter", (ev) => {
      const name = el.dataset.name || el.textContent.trim();
      showInfoFor(name);
    });

    // Click - toggle info (useful on touch devices)
    el.addEventListener("click", (ev) => {
      ev.stopPropagation();
      const name = el.dataset.name || el.textContent.trim();
      // if already open for same name, hide; otherwise show
      if (infoPanel.style.display === "block" && nameEl.textContent === name) {
        hideInfo();
      } else {
        showInfoFor(name);
      }
    });
  });

  // Click outside to hide
  document.addEventListener("click", (ev) => {
    if (!ev.target.closest("[data-name]") && !ev.target.closest("#infoPanel")) {
      hideInfo();
    }
  });

  // Escape key to hide
  document.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape") hideInfo();
  });

  // Pause / Resume animations
  function setAnimationState(state) {
    document.querySelectorAll(".orbit, .moon-orbit, .sun").forEach(el => {
      el.style.animationPlayState = state;
    });
  }
  pauseBtn.addEventListener("click", () => setAnimationState("paused"));
  resumeBtn.addEventListener("click", () => setAnimationState("running"));

  // hide initially
  hideInfo();

  console.log("✅ script.js loaded — info panel is robust and normalized.");
});
