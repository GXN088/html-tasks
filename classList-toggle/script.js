// Находим элементы вопроса и ответа
const faqQuestion = document.querySelector('.faq-question');
const faqAnswer = document.querySelector('.faq-answer');

// Добавляем обработчик клика
faqQuestion.addEventListener('click', () => {
  faqAnswer.classList.toggle('show');
  faqQuestion.classList.toggle('active'); // Класс для поворота плюсика
});
