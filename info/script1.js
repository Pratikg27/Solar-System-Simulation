// Planet information database (duplicate from script.js for standalone functionality)
const planetInfo = {
    "Sun": {
        title: "☀️ The Sun - Our Star",
        description: "The Sun is the heart of our solar system, a massive ball of hot plasma that provides the energy for all life on Earth.",
        facts: {
            "🌡️ Temperature": "Core: 15 million°C<br>Surface: 5,500°C",
            "📏 Size": "Diameter: 1.39 million km<br>109 times Earth's diameter",
            "⚖️ Mass": "1.989 × 10³⁰ kg<br>99.86% of solar system mass",
            "⚡ Energy": "Produces 3.8 × 10²⁶ watts<br>From nuclear fusion"
        },
        iconClass: "sun-icon" // Custom class for icon if needed
    },
    "Mercury": {
        title: "☿ Mercury",
        description: "The smallest planet and closest to the Sun. It has extreme temperature variations and no atmosphere to retain heat.",
        facts: {
            "Distance from Sun": "57.9 million km",
            "Diameter": "4,879 km",
            "Day Length": "59 Earth days",
            "Year Length": "88 Earth days",
            "Moons": "0",
            "Temperature": "-173°C to 427°C"
        },
        iconClass: "mercury"
    },
    "Venus": {
        title: "♀ Venus",
        description: "The hottest planet due to its thick atmosphere. Often called Earth's 'twin' because of similar size.",
        facts: {
            "Distance from Sun": "108.2 million km",
            "Diameter": "12,104 km",
            "Day Length": "243 Earth days",
            "Year Length": "225 Earth days",
            "Moons": "0",
            "Temperature": "462°C"
        },
        iconClass: "venus"
    },
    "Earth": {
        title: "🌍 Earth",
        description: "Our home planet, the only known world with life. It has liquid water, a protective atmosphere, and a magnetic field.",
        facts: {
            "Distance from Sun": "149.6 million km",
            "Diameter": "12,756 km",
            "Day Length": "24 hours",
            "Year Length": "365.25 days",
            "Moons": "1 (The Moon)",
            "Temperature": "-89°C to 58°C"
        },
        iconClass: "earth"
    },
    "Moon": {
        title: "🌙 The Moon (Earth's Satellite)",
        description: "Earth's only natural satellite. Influences tides and stabilizes Earth's axial tilt. It is gradually moving away from Earth at about 3.8 cm per year.",
        facts: {
            "Diameter": "3,474 km",
            "Orbital Period": "27.3 days",
            "Distance from Earth": "384,400 km",
            "Surface Temp": "-173 to 127 °C"
        },
        iconClass: "moon-icon" // Custom class for icon if needed
    },
    "Mars": {
        title: "♂ Mars",
        description: "The 'Red Planet' gets its color from iron oxide (rust) on its surface. It has the largest volcano in the solar system, Olympus Mons.",
        facts: {
            "Distance from Sun": "227.9 million km",
            "Diameter": "6,792 km",
            "Day Length": "24.6 hours",
            "Year Length": "687 Earth days",
            "Moons": "2 (Phobos, Deimos)",
            "Temperature": "-87°C to -5°C"
        },
        iconClass: "mars"
    },
    "Jupiter": {
        title: "♃ Jupiter",
        description: "The largest planet in our solar system. It's a gas giant with a Great Red Spot storm larger than Earth.",
        facts: {
            "Distance from Sun": "778.5 million km",
            "Diameter": "142,984 km",
            "Day Length": "9.9 hours",
            "Year Length": "12 Earth years",
            "Moons": "95 known moons",
            "Temperature": "-108°C"
        },
        iconClass: "jupiter"
    },
    "Jupiter's Moon": {
        title: "🛰️ Jupiter's Moons",
        description: "Jupiter has many notable moons, including Io (most volcanically active), Europa (subsurface ocean), Ganymede (largest moon in solar system), and Callisto.",
        facts: {
            "Largest Moon": "Ganymede (5,268 km)",
            "Io's Feature": "Most volcanically active body",
            "Europa's Feature": "Subsurface ocean beneath ice crust",
            "Interesting Fact": "Europa may harbor conditions suitable for life."
        },
        iconClass: "jupiter-moon-icon"
    },
    "Saturn": {
        title: "♄ Saturn",
        description: "Famous for its spectacular ring system. Saturn is less dense than water and would float if placed in a giant bathtub.",
        facts: {
            "Distance from Sun": "1.43 billion km",
            "Diameter": "120,536 km",
            "Day Length": "10.7 hours",
            "Year Length": "29 Earth years",
            "Moons": "146 known moons",
            "Temperature": "-139°C"
        },
        iconClass: "saturn"
    },
    "Saturn's Moon": {
        title: "🛰️ Saturn's Moons",
        description: "Saturn's moons include Titan, which is larger than Mercury and has a dense atmosphere with liquid methane lakes, and Enceladus, known for its ice geysers.",
        facts: {
            "Largest Moon": "Titan (5,149 km)",
            "Titan's Feature": "Dense atmosphere and liquid methane lakes",
            "Enceladus's Feature": "Ice geysers from south pole",
            "Interesting Fact": "Enceladus's subsurface ocean may contain hydrothermal vents."
        },
        iconClass: "saturn-moon-icon"
    },
    "Uranus": {
        title: "♅ Uranus",
        description: "An ice giant that rotates on its side. It has faint rings and is the coldest planetary atmosphere in the solar system.",
        facts: {
            "Distance from Sun": "2.87 billion km",
            "Diameter": "51,118 km",
            "Day Length": "17.2 hours",
            "Year Length": "84 Earth years",
            "Moons": "27 known moons",
            "Temperature": "-197°C"
        },
        iconClass: "uranus"
    },
    "Neptune": {
        title: "♆ Neptune",
        description: "The windiest planet with speeds reaching 2,100 km/h. It's the farthest known planet from the Sun in our solar system.",
        facts: {
            "Distance from Sun": "4.50 billion km",
            "Diameter": "49,528 km",
            "Day Length": "16.1 hours",
            "Year Length": "165 Earth years",
            "Moons": "16 known moons",
            "Temperature": "-201°C"
        },
        iconClass: "neptune"
    }
};


// Create animated stars background
function createStars() {
    const starsContainer = document.getElementById('stars');
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        starsContainer.appendChild(star);
    }
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    const links = document.querySelectorAll('nav a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
    });
}

// Contact form handling
function setupContactForm() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Show success message
        successMessage.classList.add('show');
        form.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
    });
}

// Planet card interactions
function setupPlanetInteractions() {
    const planetCards = document.querySelectorAll('.planet-card');
    
    planetCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

function loadDynamicPlanetDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const planetName = urlParams.get('planet');

  if (planetName && planetInfo[planetName]) {
    const data = planetInfo[planetName];

    const dynamicSection = document.getElementById('dynamicPlanetDetailSection');
    if (dynamicSection) {
      dynamicSection.style.display = 'block';
      dynamicSection.classList.add('visible');
    }

    const titleEl = document.getElementById('dynamicPlanetDetailTitle');
    if (titleEl) titleEl.innerHTML = data.title;

    const descEl = document.getElementById('dynamicPlanetDetailDescription');
    if (descEl) descEl.innerHTML = data.description;

    const factsContainer = document.getElementById('dynamicPlanetDetailFacts');
    if (factsContainer) {
      factsContainer.innerHTML = '';
      for (const key in data.facts) {
        const factDiv = document.createElement('div');
        factDiv.className = 'sun-fact';
        factDiv.innerHTML = `<h3>${key}</h3><p>${data.facts[key]}</p>`;
        factsContainer.appendChild(factDiv);
      }
    }

    // Optionally scroll to the dynamic section
    if (dynamicSection) {
      setTimeout(() => {
        dynamicSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }
}



// Initialize all functionality
function init() {
    createStars();
    setupSmoothScrolling();
    setupScrollAnimations();
    setupContactForm();
    setupPlanetInteractions();
    loadDynamicPlanetDetails(); // Call this on init for dynamic content
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
