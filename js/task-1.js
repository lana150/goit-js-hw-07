// Знаходимо всі елементи li з класом item
const categories = document.querySelectorAll('li.item');

// Виводимо кількість категорій
console.log(`Number of categories: ${categories.length}`);

// Проходимо по кожній категорії та виводимо її заголовок і кількість елементів у вкладеному списку
categories.forEach(category => {
  // Знаходимо заголовок категорії
  const title = category.querySelector('h2').textContent;

  // Знаходимо всі вкладені елементи li в категорії
  const elementsCount = category.querySelectorAll('ul li').length;

  // Виводимо заголовок і кількість елементів
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});


