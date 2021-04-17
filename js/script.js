"use strict";

// let number = 4.5;

// const obj = {
//     firstName: "John",
//     age: 25,
//     isMarried: false
// };


// console.log(obj.firstName);

// let arr = ["plum.png", "orange.jpg", 6, "apple.bmp", {}, []];
// console.log(arr[3], arr[4]);

// alert("hello Ilja");

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("You have 18?", "");
// console.log(typeof answer);

// const answers = [];
// answers[0] = prompt("Your name?", "");
// answers[1] = prompt("Your second name?", "");
// answers[2] = prompt("Your age?", "");

// document.write(answers);
// console.log(typeof (answers));

// const user = prompt("That is your name?");

// alert(`Hello, ${user}! Have are you?`);

//!----------------Operators------------------------------

// console.log("arr" + " - object");
// console.log(4 + "5");
//45

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// console.log(incr);
//11
// console.log(13 % 5);
//3

// const isChecked = true,
//     isClose = false;
// console.log(isChecked || isClose);
//true

//! IF SWITCH
// const num = 50;

// if (num == 20) {
//     console.log("num = 20");
// }
// else if (num > 15) {
//     console.log("num больше 15");
// } else {
//     console.log("мимо");
// }

//TODO: с одним условием - тернарный оператор.

// (num == 50) ? console.log("ok") : console.log("Error");

// const num2 = 40;

// switch (num2) {
//     case 49:
//         console.log("Не верно");
//         break;
//     case 100:
//         console.log("Нет не так");
//         break;
//     case 40:
//         console.log("SUPER");
//         break;
//     default:
//         console.log("NOT HAPPY");
//         break;
// }

//--------------------------------------------------------------------

//TODO: Lesson 14 цыклы.
// let num3 = 45;

// while (num3 < 50) {
//     console.log(num3);
//     num3++;
// }
//--------------------------------------------------------------------

// for (let i = 1; i < 8; i++) {
//     if (i === 6) {
//         //break;
//         continue;
//     }
//     console.log(i);
// }
//--------------------------------------------------------------------

//TODO:  Function : arrow func.

// function showFirstMessage() {
//     console.log("Hello world");
// }
// showFirstMessage();
//-----------------------------------------

//! Function DECLARATION

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 3;  // local 
//     console.log(num);
// }
// showFirstMessage("Hello world!");
//-----------------------------------------

function calc(a, b) {
    return (a + b);
}
console.log(calc(4, 5));
//-----------------------------------------

function ret() {
    let num = 50;
    //
    //
    return num;  // возврат обработанной переменной num.
}
const anotherNum = ret();  // записывает результат в переменную
console.log(anotherNum);

//-----------------------------------------

//! FUNCTION EXPRESSION Создается только когда до нее доходит КОД . 
//! Вызов только снизу. 

const logger = function () {
    console.log("ILJA");
};
logger();
//-----------------------------------------

//!  ARROW F

const calculator = (a, b) => a + b;

const calc2 = (a, b) => {
    console.log("hi");
    return a - b;
};

//-------------------------------------------- LESSON 17
//TODO: String Methods 

const str = "test"; //lowerCasse / UpperCase

let result = str.toUpperCase();
console.log(result); // TEST
console.log(str); //test

//---------------------------------------
const fruit = "Some fruit";
console.log(fruit.indexOf("fruit")); // result = 5    (-1 нету сходства)

const logg = "hello world Ilja!";
console.log(logg.slice(6, 11)); //world (можно с 1 аргум (6)).

console.log(logg.substring(6, 11)); //world
console.log(logg.substr(6, 5));

//----------------------------------------
//TODO: NUMBER Methods

const num = 12.2;
console.log(Math.round(num));

const test2 = "12.2px";
console.log(parseInt(test2)); // 12 - сделал чисто из 12.2px
console.log(parseFloat(test2));

//----------------------------------------


