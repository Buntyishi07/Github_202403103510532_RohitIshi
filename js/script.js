// script.js — small UI behavior
document.addEventListener('DOMContentLoaded', function () {
  // year filler
  const y = new Date().getFullYear();
  const yEl = document.getElementById('year');
  const y2 = document.getElementById('year2');
  if (yEl) yEl.textContent = y;
  if (y2) y2.textContent = y;

  // mobile nav toggle
  const toggle = document.getElementById('navToggle');
  const toggle2 = document.getElementById('navToggle2');
  function toggleNav() {
    document.body.classList.toggle('nav-open');
  }
  if (toggle) toggle.addEventListener('click', toggleNav);
  if (toggle2) toggle2.addEventListener('click', toggleNav);

  // smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth'});
        // close nav on mobile
        if (document.body.classList.contains('nav-open')) document.body.classList.remove('nav-open');
      }
    });
  });

  // contact form placeholder behavior (optional)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e){
      // form action uses placeholder; show small confirmation
      e.preventDefault();
      alert('Form is configured with a placeholder endpoint. Replace action URL with your Formspree or backend endpoint and re-upload to GitHub for live messages.');
      form.reset();
    });
  }
});
