// Отримуємо посилання на форму
const loginForm = document.querySelector('.login-form');

// Додаємо слухача події submit на форму
loginForm.addEventListener('submit', function (event) {
  // Скасовуємо перезавантаження сторінки при сабміті
  event.preventDefault();

  // Отримуємо значення полів форми
  const {
    email: { value: email },
    password: { value: password }
  } = event.target.elements;

  // Очищуємо значення полів від пробілів
  const trimmedEmail = email.trim();
  const trimmedPassword = password.trim();

  // Перевіряємо, чи заповнені всі поля
  if (!trimmedEmail || !trimmedPassword) {
    alert('All form fields must be filled in');
    return;
  }

  // Створюємо об'єкт із даними форми
  const formData = {
    email: trimmedEmail,
    password: trimmedPassword
  };

  // Виводимо об'єкт в консоль
  console.log(formData);

  // Очищуємо форму
  loginForm.reset();
});