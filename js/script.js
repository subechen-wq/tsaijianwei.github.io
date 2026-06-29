document.addEventListener("DOMContentLoaded", function () {

  document.body.classList.add("page-loaded");

  const navbar = document.querySelector(".navbar");

  function handleNavbarScroll() {
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 80);
    }
  }

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

  handleNavbarScroll();

  window.addEventListener("scroll", handleNavbarScroll);

});
