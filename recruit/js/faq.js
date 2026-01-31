const questions = document.querySelectorAll('.faq-question');
questions.forEach(q => {
  q.addEventListener('click', () => {
    q.classList.toggle('active');
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");

  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });
});