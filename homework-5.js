//  Создать функцию, которая принимает 2 параметра: город и температуру.

const showTemperatureCity = (city, temperature) => {
  console.log(`Сейчас ${city} температура - ${temperature} градусов по Цельсию.`);
}
showTemperatureCity('в Махачкале', 9);

//   Создать переменную, которая хранит внутри себя скорость звука.

const speedSound = 343;

const speed = speed => {
  if (speed >= speedSound)
    console.log('Сверхзвуковая скорость');
 else {
    console.log('Дозвуковая скорость');
  } 
}
speed(340);

// Создать переменную №1, которая содержит продукт и переменную №2, которая содержит его цену.

const product = 'Айфон 17 про';
const price = 5000;

const money = budget => {
  if (budget >= price)
    console.log(`${product} пробреён. Спасибо за покупку!`);
  else{
    console.log(`Вам не хватает ${price - budget}$, пополните баланс.`);
  } 
}
money(4000);

// Функция для вычисления значений.

const calculateValue = (a,b) =>{
  console.log(a / b);
}
calculateValue(90, 30);

// Данные пользователя.

const userName = 'Нурбек';
const userAge = 22;
const userGrowth = 174;