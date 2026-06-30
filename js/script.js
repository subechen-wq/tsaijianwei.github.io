document.addEventListener("DOMContentLoaded", function () {

  document.body.classList.add("page-loaded");

  const navbar = document.querySelector(".navbar");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  function handleNavbarScroll() {
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 80);
    }
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });
  }

  // Reveal Animation
  const reveals = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -50px 0px"
  });

  reveals.forEach(function(reveal) {
    revealObserver.observe(reveal);
  });

  /* ===== Timeline Animation ===== */

  const timelineItems = document.querySelectorAll(".timeline-item");

  const timelineObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, {
    threshold: 0.35
  });

  timelineItems.forEach(function(item) {
    timelineObserver.observe(item);
  });

  /* ============================== */

  handleNavbarScroll();

  window.addEventListener("scroll", handleNavbarScroll);

});
