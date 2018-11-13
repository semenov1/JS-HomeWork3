//Написать функцию подсчета факториала числа.
//Считать с помощью модального окна браузера число, которое введет пользователь.
//С помощью функции посчитать факториал числа, которое ввел пользователь, и вывести его на экран.
//Использовать синтаксис ES6 для работы с перемеными и функциями.

let number = prompt("Enter the number: ");
if(number==0){
    document.write("Факторил числа "+number+"= 1");
}

function factorial(number){
    return number ? number * factorial(number - 1) : 1;
}
document.write("Факторил числа "+number+"= "+factorial(number));