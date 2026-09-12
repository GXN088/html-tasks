const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownToggle.addEventListener('click', function() {
    // Строка, которая переключает класс "show"
    dropdownMenu.classList.toggle('show');
});
