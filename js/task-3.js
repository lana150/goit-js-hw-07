const input = document.getElementById('name-input');
  const output = document.getElementById('name-output');

  input.addEventListener('input', function () {
    // Отримуємо значення інпуту, обрізаємо пробіли на початку і кінці
    const trimmedValue = input.value.trim();
    
    // Якщо інпут порожній або містить лише пробіли, виводимо "Anonymous"
    if (trimmedValue === '') {
      output.textContent = 'Anonymous';
    } else {
      output.textContent = trimmedValue;
    }
  });