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
import {includesElement} from './01.js';
// function includesElement(array, element) {
//     for (let i = 0; i < array.length; i++) {

//         if (array[i] === element) {

//             return true;

//         }
//     }
//     return false;
// }


function findCommonElements(array1, array2) {

    const identical = [];

    for (let i = 0; i < array1.length; i++) {

        const scores1 = array1[i]

        if (includesElement(array2, scores1)) {

            identical.push(scores1)

        } 

    }

    return identical
}




// const num1 = [1, 5, 7, 8];
// const num2 = [2, 5, 4];
// console.log(findCommonElements(num1, num2));