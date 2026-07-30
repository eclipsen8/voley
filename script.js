document.addEventListener('DOMContentLoaded', () => {
  // ----------------------------------------------------
  // 1. Ойыншыларға ЛАЙК басу логикасы
  // ----------------------------------------------------
  const cards = document.querySelectorAll('.card__body');

  cards.forEach((card) => {
    // Лайк батырмасын құру
    const likeBtn = document.createElement('button');
    likeBtn.className = 'like-btn';
    likeBtn.innerHTML = '❤️ <span class="like-count">0</span>';

    // Батырманы карточкаға қосу
    card.appendChild(likeBtn);

    // Басқан кезде санды көбейту
    let count = 0;
    likeBtn.addEventListener('click', () => {
      count++;
      likeBtn.querySelector('.like-count').textContent = count;
      
      // Анимация әсері
      likeBtn.classList.add('liked');
      setTimeout(() => likeBtn.classList.remove('liked'), 200);
    });
  });

  // ----------------------------------------------------
  // 2. Навигация сілтемелеріне жұмсақ скролл (Smooth Scroll)
  // ----------------------------------------------------
  const navLinks = document.querySelectorAll('.nav a, .btn');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});