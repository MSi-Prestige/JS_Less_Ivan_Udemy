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
const num = 50;

if (num == 20) {
    console.log("num = 20");
}
else if (num > 15) {
    console.log("num больше 15");
} else {
    console.log("мимо");
}

//TODO: с одним условием - тернарный оператор.

// (num == 50) ? console.log("ok") : console.log("Error");

const num2 = 40;

switch (num2) {
    case 49:
        console.log("Не верно");
        break;
    case 100:
        console.log("Нет не так");
        break;
    case 40:
        console.log("SUPER");
        break;
    default:
        console.log("NOT HAPPY");
        break;
}

//--------------------------------------------------------------------

//TODO: Lesson 14 цыклы.
let num3 = 45;

while (num3 < 50) {
    console.log(num3);
    num3++;
}
//--------------------------------------------------------------------

for (let i = 1; i < 8; i++) {
    if (i === 6) {
        //break;
        continue;
    }
    console.log(i);
}
//--------------------------------------------------------------------



