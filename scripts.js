// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navLinks.classList.remove('open');
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if(targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, // account for navbar height
        behavior: 'smooth'
      });
    }
  });
});
