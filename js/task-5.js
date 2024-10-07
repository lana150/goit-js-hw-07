// Функція для генерації випадкового кольору в hex-форматі
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Отримуємо елементи з DOM
const button = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

// Додаємо обробник події на кнопку
button.addEventListener('click', () => {
  // Генеруємо випадковий колір
  const randomColor = getRandomHexColor();

  // Змінюємо колір фону body
  document.body.style.backgroundColor = randomColor;

  // Встановлюємо новий колір в span
  colorSpan.textContent = randomColor;
});