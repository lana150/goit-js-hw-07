// Функція для отримання випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Функція для створення коробок
function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  
  // Очищення вмісту контейнера перед додаванням нових елементів
  boxesContainer.innerHTML = '';

  // Додаємо div елементи
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    
    // Розміри коробки
    const size = 30 + i * 10; // 30px для першої коробки, далі +10px
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    
    // Випадковий колір фону
    box.style.backgroundColor = getRandomHexColor();
    
    // Додаємо коробку в контейнер
    boxesContainer.appendChild(box);
  }
}

// Функція для очищення коробок
function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Очищаємо вміст
}

// Обробка подій для кнопок
document.querySelector('[data-create]').addEventListener('click', () => {
  const input = document.querySelector('input[type="number"]');
  const amount = Number(input.value);

  // Перевірка на коректність введеного значення
  if (amount < 1 || amount > 100) {
    return; // Не робимо нічого, якщо значення не в межах
  }

  // Створюємо коробки та очищаємо поле вводу
  createBoxes(amount);
  input.value = '';
});

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);