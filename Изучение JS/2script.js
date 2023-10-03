// Получаем ссылку на кнопку на вашем веб-сайте
const websiteButton = document.querySelector('.website-button');

// Функция, которая будет вызвана при нажатии кнопки на клавиатуре
function handleKeyPress(event) {
  // Проверяем, является ли нажатая клавиша той, которую вы хотите привязать к кнопке
  if (event.key === 'Enter') {
    // Симулируем клик на кнопку на вашем веб-сайте
    websiteButton.click();
    a += 1
    console.log("a")
  }
}

// Отслеживаем событие нажатия кнопки на клавиатуре
document.addEventListener('keydown', handleKeyPress);
