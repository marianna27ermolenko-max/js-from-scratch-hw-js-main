/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

// function includesElement(array, element) {
//     for (let i = 0; i < array.length; i++) {

//         if (array[i] === element) {

//             return true;

//         }
//     }
//     return false;
// }


// function findCommonElements(array1, array2) {

//     const commonEl = [];

//     for (let i = 0; i < array1.length; i++) {

//         const currentEl = array1[i];

//         if (includesElement(array2, currentEl)) {

//             commonEl.push(currentEl);

//         } 
//     }

//     return commonEl;
// }




// const num1 = [1, 5, 7, 8];
// const num2 = [2, 5, 4];
// console.log(findCommonElements(num1, num2));


function findCommonElements(array1, array2) {
  const commonElements = [];
  
  // Проходим по элементам первого массива
  for (let i = 0; i < array1.length; i++) {
    const currentElement = array1[i];
    
    // Проверяем, есть ли текущий элемент во втором массиве
    if (includesElement(array2, currentElement)) {
      // Если элемент есть во втором массиве, добавляем его в результат
      commonElements.push(currentElement);
    }
  }
  
  return commonElements;
}