const productCard = document.querySelector('.card-container');
const changeColorCardButton = document.querySelector('.change-color-card-button');
const redColorHash = '#fb1010'; 
const grenColorHash = '#13b210ff'; 

// поменять цвет первой карточки

changeColorCardButton.addEventListener('click', () => {
  productCard.style.backgroundColor = redColorHash;
}) 

// поменять цвет всех карточек

const productCards = document.querySelectorAll('.card-container');
const changeColorTheCardsButton = document.querySelector('.change-color-the-cards-button');

changeColorTheCardsButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = grenColorHash)   
}) 

// открыть страницу google.com

const openGoogleButton = document.querySelector('.open-google');

openGoogleButton.addEventListener('click', () => {
  answer = confirm('Вы действительно хотите перейти на страницу Google?');

  if (answer === true) {
    window.open('https://google.com');
  } else {
    return
  }
})

// вывести в консоль сообщение при клике на кнопку

const openLogButton = document.querySelector('.open-consol-log');

openLogButton.addEventListener('click', () => openConsoleLogButton('ДЗ№4')) 

function openConsoleLogButton(message) {
  alert(message);
  console.log(message);
}

// вывести в консоль сообщение при наведении на заголовок

const mainheading = document.querySelector('.main-heading');

mainheading.addEventListener('mouseover', () => {
  console.log('Выбери свой продукт')
})

// поменять цвет кнопки при клике

const changeButtonColor = document.querySelector('.change-button-color');

changeButtonColor.addEventListener('click', () => {
  changeButtonColor.classList.toggle('bg-red')
})