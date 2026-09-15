function toggleMenu(buttonId, menuId) {
  const button = document.getElementById(buttonId);
  const menu = document.getElementById(menuId);

  button.addEventListener("click", function () {
    // 1. Переключаем класс "active" у кнопки бургер-меню
    button.classList.toggle("active");
    
    // 2. Переключаем класс "active" у навигационного меню
    menu.classList.toggle("active");
  });
}

// Вызов функции
toggleMenu("myButton", "myMenu");
