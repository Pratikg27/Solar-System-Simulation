// Unified info for planets, moons & sun
const bodyInfo = {
  Sun: "The Sun: A G-type main-sequence star at the center of the Solar System. Provides light, heat, and energy. Diameter: ~1.39 million km.",

  Mercury: "Mercury: Smallest planet, closest to the Sun. Orbital period: 88 days.",
  Venus: "Venus: Hottest planet with thick atmosphere. Orbital period: 225 days.",
  Earth: "Earth: Our home, has life and water. Orbital period: 365 days.",
  Mars: "Mars: The Red Planet, possible future colony. Orbital period: 687 days.",
  Jupiter: "Jupiter: Largest planet, gas giant with Great Red Spot. Orbital period: ~12 years.",
  Saturn: "Saturn: Famous for its rings, a gas giant. Orbital period: ~29 years.",
  Uranus: "Uranus: Ice giant, rotates on its side. Orbital period: ~84 years.",
  Neptune: "Neptune: Farthest planet, very windy. Orbital period: ~165 years.",

  Moon: "The Moon: Earth's only natural satellite. Orbital period: ~27.3 days.",
  "Jupiter's Moon": "One of Jupiter's many moons (e.g., Io, Europa, Ganymede, Callisto).",
  "Saturn's Moon": "One of Saturn's >80 moons. Titan is the largest and has a thick atmosphere."
};

// Cache DOM
const nameEl = document.getElementById("planetName");
const detailsEl = document.getElementById("planetDetails");
const pauseBtn = document.getElementById("pauseBtn");
const resumeBtn = document.getElementById("resumeBtn");
const infoPanel = document.getElementById("infoPanel");

// Hide info panel by default
infoPanel.style.display = "none";

// ---- Click handling ----
document.addEventListener("click", (e) => {
  const clickable = e.target.closest("[data-name]");
  if (!clickable) return;

  e.stopPropagation();

  const name = clickable.dataset.name || clickable.textContent.trim() || "Unknown";
  nameEl.textContent = name;
  detailsEl.textContent = bodyInfo[name] || "No details available.";
  infoPanel.style.display = "block"; // show panel
});

// ---- Hover Info Handling ----
document.querySelectorAll("[data-name]").forEach(el => {
  el.addEventListener("mouseenter", () => {
    const name = el.dataset.name || "Unknown";
    nameEl.textContent = name;
    detailsEl.textContent = bodyInfo[name] || "No details available.";
    infoPanel.style.display = "block"; // show when hover
  });

  el.addEventListener("mouseleave", () => {
    infoPanel.style.display = "none"; // hide when not hovering
  });
});

// ---- Pause / Resume (planets, moons, and sun) ----
function setAnimationState(state) {
  document.querySelectorAll(".orbit, .moon-orbit, .sun").forEach(el => {
    el.style.animationPlayState = state;
  });
}

pauseBtn.addEventListener("click", () => setAnimationState("paused"));
resumeBtn.addEventListener("click", () => setAnimationState("running"));

console.log("Solar System Simulation ready 🌞🌙");


