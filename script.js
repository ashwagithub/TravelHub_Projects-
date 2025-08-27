// Mobile menu
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('hidden');
}

// Hero slider
let heroIndex = 0;
const hero = document.getElementById('heroSlider');
function showHero(i) {
  heroIndex = (heroIndex + i + 3) % 3;
  hero.style.transform = `translateX(-${heroIndex * 100}%)`;
}
function slideHero(dir) { showHero(dir); }
setInterval(() => showHero(1), 5000);

// Deals carousel arrows
function scrollDeals(dir) {
  document.querySelector('#deals .carousel')
    .scrollBy({ left: dir * 220, behavior: 'smooth' });
}
