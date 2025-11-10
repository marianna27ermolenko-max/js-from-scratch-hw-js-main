/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/

let dice1; // your code
let dice2; // your code
let isWinningDouble; // your code


let randomNumber1 = Math.floor(Math.random()*6);
if (randomNumber1 === 0) {
  dice1 = '1'
} else if (randomNumber1 === 1) {
  dice1 = '2'
} else if (randomNumber1 === 2) {
  dice1 = '3'
} else if (randomNumber1 === 3) {
  dice1 = '4'
} else if (randomNumber1 === 4) {
  dice1 === '5'
} else  {
  dice1 = '6'};


let randomNumber2 = Math.floor(Math.random()*6);
if (randomNumber2 === 0) {
  dice1 = '1'
} else if (randomNumber2 === 1) {
  dice1 = '2'
} else if (randomNumber2 === 2) {
  dice1 = '3'
} else if (randomNumber2 === 3) {
  dice1 = '4'
} else if (randomNumber2 === 4) {
  dice1 === '5'
} else  {
  dice1 = '6'};


isWinningDouble = (dice1 === dice2) &&  dice1 > 3 &&  dice2 > 3 ? 'Выигрышный дубль!' : 'Не выигрышный дубль.'; 

/*
console.log('Первый бросок: ' + dice1)
console.log('Второй бросок: ' + dice2)
if (isWinningDouble) {
  console.log('Выигрышный дубль!')
} else {
  console.log('Не выигрышный дубль.')
}
*/
