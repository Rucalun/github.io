const accordions = document.querySelectorAll('.accordion');

accordions.forEach(currentAccordion => {
  const header = currentAccordion.querySelector('.accordion-header');
  const icon = header.querySelector('.accordion-toggle-icon');

  header.addEventListener('click', () => {
    const isActive = currentAccordion.classList.contains('active');

    accordions.forEach(acc => {
      acc.classList.remove('active');
      acc.querySelector('.accordion-toggle-icon').textContent = '+';
    });

    if (!isActive) {
      currentAccordion.classList.add('active');
      icon.textContent = '-';

      const offset = 80;
      const y = header.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      })
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hash = window.location.hash.substring(1); // #pf → pf

  if (hash) {
    const targetAccordion = document.getElementById(hash);
    if (targetAccordion && targetAccordion.classList.contains('accordion')) {
      const header = targetAccordion.querySelector('.accordion-header');
      const icon = header.querySelector('.accordion-toggle-icon');

      // 一度すべて閉じる
      document.querySelectorAll('.accordion').forEach(acc => {
        acc.classList.remove('active');
        acc.querySelector('.accordion-toggle-icon').textContent = '+';
      });

      // 該当のアコーディオンを開く
      targetAccordion.classList.add('active');
      icon.textContent = '-';

      // スクロールして表示（同じく80pxオフセット）
      const offset = 80;
      const y = header.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  }

  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");

  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });
});