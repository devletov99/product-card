// поменять цвет первой карточки

const productCard = document.querySelector('.card-container');
const changeColorCardButton = document.querySelector('#change-color-card-button');
const redColorHash = '#fb1010'; 

changeColorCardButton.addEventListener('click', () => {
  productCard.style.backgroundColor = redColorHash;
}) 

// поменять цвет всех карточек

const productCards = document.querySelectorAll('.card-container');
const changeColorCardsButton = document.querySelector('#change-color-cards-button');
const greenColorHash = '#13b210ff'; 

changeColorCardsButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)   
}) 

// открыть страницу google.com

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', () => {
  answer = confirm('Вы действительно хотите перейти на страницу Google?');

  if (answer === true) {
    window.open('https://google.com');
  } else {
    return
  }
})

// вывести в консоль сообщение при клике на кнопку

const openLogButton = document.querySelector('#open-console-log');

openLogButton.addEventListener('click', () => openConsoleLogButton('ДЗ№4')) 

function openConsoleLogButton(message) {
  alert(message);
  console.log(message);
}

// вывести в консоль сообщение при наведении на заголовок

const mainTitle = document.querySelector('.main-Title');
const headerContent = mainTitle.textContent;

mainTitle.addEventListener('mouseover', () => {
  console.log (headerContent)
})

// поменять цвет кнопки при клике

const changeButtonColor = document.querySelector('#change-button-color');

changeButtonColor.addEventListener('click', () => {
  changeButtonColor.classList.toggle('bg-red')
})