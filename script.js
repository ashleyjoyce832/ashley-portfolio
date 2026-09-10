// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu after clicking a link (mobile)
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Carousel prev/next buttons (Agency Habitat)
document.querySelectorAll('.carousel').forEach((carousel) => {
  const track = carousel.querySelector('.carousel-track');
  const prevBtn = carousel.querySelector('.carousel-btn-prev');
  const nextBtn = carousel.querySelector('.carousel-btn-next');
  if (!track) return;
  const scrollByAmount = () => {
    const item = track.querySelector('.carousel-item');
    return item ? item.getBoundingClientRect().width + 18 : 200;
  };
  if (prevBtn) prevBtn.addEventListener('click', () => track.scrollBy({ left: -scrollByAmount(), behavior: 'smooth' }));
  if (nextBtn) nextBtn.addEventListener('click', () => track.scrollBy({ left: scrollByAmount(), behavior: 'smooth' }));

  // If everything already fits, there is nothing to scroll: centre the items
  // and hide the arrows instead of showing controls that do nothing.
  const syncArrows = () => {
    const fits = track.scrollWidth <= track.clientWidth + 2;
    carousel.classList.toggle('is-static', fits);
  };
  syncArrows();
  window.addEventListener('resize', syncArrows);
  // re-check once posters have laid out
  setTimeout(syncArrows, 400);
});

// Hero scrapbook: once the polaroids have dropped in, give them a slow idle
// drift so the page keeps breathing. The image set itself is curated and fixed.
(function floatScrapbook() {
  const scraps = Array.from(document.querySelectorAll('.scrapbook .scrap'));
  if (!scraps.length) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  scraps.forEach((scrap, i) => {
    // start after this polaroid's own entrance animation has finished
    const entranceDone = 100 + i * 100 + 700;
    setTimeout(() => {
      scrap.style.setProperty('--float-dur', (6.5 + Math.random() * 3).toFixed(2) + 's');
      scrap.style.setProperty('--float-delay', (Math.random() * 1.5).toFixed(2) + 's');
      scrap.classList.add('is-floating');
    }, entranceDone);
  });
})();


// Phone carousel (Instagram posts shown in a device frame)
document.querySelectorAll('[data-phone-carousel]').forEach((root) => {
  const slides = Array.from(root.querySelectorAll('.phone-slide'));
  const caption = root.querySelector('.phone-caption');
  const dotWrap = root.querySelector('.phone-dots');
  const prev = root.querySelector('.phone-prev');
  const next = root.querySelector('.phone-next');
  if (!slides.length) return;

  let index = 0;

  // Build one dot per slide
  const dots = slides.map((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'phone-dot' + (i === 0 ? ' is-active' : '');
    dot.type = 'button';
    dot.setAttribute('aria-label', 'Post ' + (i + 1));
    dot.addEventListener('click', () => show(i));
    if (dotWrap) dotWrap.appendChild(dot);
    return dot;
  });

  function show(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach((s, n) => {
      const on = n === index;
      s.classList.toggle('is-active', on);
      // a slide can be a <video>; pause and rewind it when it leaves the screen
      if (s.tagName === 'VIDEO' && !on) { s.pause(); s.currentTime = 0; }
    });
    dots.forEach((d, n) => d.classList.toggle('is-active', n === index));
    if (caption) caption.innerHTML = slides[index].getAttribute('data-caption') || '';
  }

  if (prev) prev.addEventListener('click', () => show(index - 1));
  if (next) next.addEventListener('click', () => show(index + 1));

  // Arrow keys when the carousel has focus
  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { show(index - 1); }
    if (e.key === 'ArrowRight') { show(index + 1); }
  });

  show(0);
});

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Typewriter effect on the hero name
const heroName = document.getElementById('heroName');
if (heroName) {
  const fullText = heroName.getAttribute('data-text') || heroName.textContent;
  heroName.textContent = '';

  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';
  cursor.setAttribute('aria-hidden', 'true');

  let i = 0;
  const typeSpeed = 90; // ms per character

  function typeNext() {
    if (i <= fullText.length) {
      heroName.textContent = fullText.slice(0, i);
      heroName.appendChild(cursor);
      i++;
      setTimeout(typeNext, typeSpeed);
    } else {
      // Leave the cursor blinking briefly, then remove it for a clean final state
      setTimeout(() => cursor.remove(), 1400);
    }
  }

  // Respect reduced-motion preferences: show the full name immediately
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    heroName.textContent = fullText;
  } else {
    typeNext();
  }
}
