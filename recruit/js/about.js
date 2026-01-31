document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.querySelector(".video-overlay");

  window.addEventListener("load", () => {
    setTimeout(() => {
      overlay.classList.add("fade-out");
    }, 3000);
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      overlay.classList.add("fade-out");
    }
  });

  /*
  setTimeout(() => {
    overlay.classList.add("fade-out");
  }, 3000); */

  const fadeIns = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

fadeIns.forEach(el => observer.observe(el));

  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");

  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });
});