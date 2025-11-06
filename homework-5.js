//  Создать функцию, которая принимает 2 параметра: город и температуру.

const showTemperatureCity = (city, temperature) => {
  console.log(`Сейчас в городе ${city} температура - ${temperature} градусов по Цельсию.`);
}
showTemperatureCity('Махачкала', 9);

//   Создать переменную, которая хранит внутри себя скорость звука.

const SPEED_SOUND = 343;

const getSpeedComparison = speed => {
  if (speed >= SPEED_SOUND)
    console.log('Сверхзвуковая скорость');
 else {
    console.log('Дозвуковая скорость');
  } 
}
getSpeedComparison(340);

// Создать переменную №1, которая содержит продукт и переменную №2, которая содержит его цену.

const product = 'Айфон 17 про';
const price = 5000;

const buyPhone = budget => {
  if (budget >= price)
    console.log(`${product} пробретён. Спасибо за покупку!`);
  else{
    console.log(`Вам не хватает ${price - budget}$, пополните баланс.`);
  } 
}
buyPhone(4000);

// Функция для вычисления значений.

const dividingValue = (a, b) =>{
  console.log(a / b);
}
dividingValue(90, 30);

// Данные пользователя.

const userName = 'Нурбек';
const userAge = 22;
const userGrowth = 174;