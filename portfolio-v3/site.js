/* Ashley Joyce portfolio v2: nav, tri-vision billboard, work filters */
(function () {
  'use strict';

  /* ---------- Top bar ---------- */
  var bar = document.querySelector('.topbar');
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
  if (bar) {
    var onScroll = function () { bar.classList.toggle('is-scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Old single-page deep links -> new pages ---------- */
  var moved = {
    'about': 'connect.html', 'contact': 'connect.html',
    'internships': 'work.html', 'agency-habitat': 'dfw-clients.html#agency-habitat',
    'beauty-content': 'revision.html', 'local-clients': 'dfw-clients.html#local-clients',
    'influencer': 'buddle.html#influencer', 'juus': 'juus.html',
    'jo-agency': 'jo-agency.html', 'cook-childrens': 'cook-childrens.html',
    'research': 'clean-beauty.html', 'research-findings': 'clean-beauty.html#research-findings',
    'brilliant': 'clean-beauty.html#brilliant', 'influencer-strategy': 'clean-beauty.html#influencer-strategy',
    'pop-ups': 'clean-beauty.html#pop-ups', 'marketing-plan': 'clean-beauty.html#marketing-plan',
    'favorites': 'work.html', 'north-texas-lead': 'roxo.html', 'school': 'coursework.html',
    'writing': 'writing.html', 'passions': 'beyond.html'
  };
  if (document.body.classList.contains('page-home') && window.location.hash) {
    var dest = moved[window.location.hash.slice(1)];
    if (dest) window.location.replace(dest);
  }

  /* ---------- Scroll reveal ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
      }, { threshold: 0.2 });
      reveals.forEach(function (r) { io.observe(r); });
    } else {
      reveals.forEach(function (r) { r.classList.add('in'); });
    }
  }

  /* ---------- Work filters ---------- */
  var filters = document.querySelectorAll('.filters button');
  if (filters.length) {
    var tiles = document.querySelectorAll('.tile[data-cat]');
    filters.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var f = btn.dataset.filter;
        filters.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
        tiles.forEach(function (t) { t.hidden = !(f === 'all' || t.dataset.cat === f); });
      });
    });
  }
  /* ---------- Click any work image to see it full size ---------- */
  var shots = document.querySelectorAll('.pg img, .ntl2 img, .phone-scr img');
  if (shots.length) {
    var lb = document.createElement('div');
    lb.className = 'lb'; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true');
    lb.innerHTML = '<button type="button" aria-label="Close">&times;</button><img alt="">';
    document.body.appendChild(lb);
    var big = lb.querySelector('img');
    var close = function () { lb.classList.remove('open'); big.removeAttribute('src'); };
    lb.addEventListener('click', close);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    shots.forEach(function (img) {
      if (img.closest('a')) return; // already links somewhere
      img.addEventListener('click', function () {
        big.src = img.currentSrc || img.src; big.alt = img.alt || '';
        lb.classList.add('open');
      });
    });
  }
})();
