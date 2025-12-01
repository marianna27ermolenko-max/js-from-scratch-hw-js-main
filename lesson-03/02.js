// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае


// ПЕРВЫЙ ВАРИАНТ
// function isEven(number) {
//     if (number%2 === 0) {
//         console.log(true);
        
//     } else {
//          console.log(false)
//     }
// }


function isEven(number) {

     let answer = number%2 === 0 ? true : false;   // или так - let answer = number%2 === 0; или return number%2 === 0
     return answer;
    
}