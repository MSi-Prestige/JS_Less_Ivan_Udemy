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

const calculator = (a, b, c) => a + b + c;
console.log(calculator(3, 4, 10));

const calc2 = (a, b) => {
    console.log("hi");
    return a - b;
};
console.log(calc2(2, 4));

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
console.log(parseFloat(test2)); //12.2

//----------------------------------------
//TODO: Callback Function 19 lesson

function first() {
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

// first();
// second();
//----------------------------------------

function learnJS(lang, callback) {
    // setTimeout(function () {
    //     console.log("SetTime"); //! Asynhron FUNCTION 
    // }, 500);
    console.log(`Я учу - ${lang}`);
    callback();
}

learnJS("JavaScript", function () {  // Анонимная Функ.
    console.log("Я прошел этот урок!");
});

//-----------------------------------------
//TODO: Object JS 20 lesson

const obj2 = new Object();
const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red",
    }
};

console.log(options.colors);

//TODO: Смотрим что в обьекте ! 
for (let key in options) {
    //тут смотрим есть ли обьект в обьекте ? 
    if (typeof (options[key]) === "object") {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}


//TODO: Lesson 21    ARRAY 

const arr = [1, 2, 5, 9, "da"];

//arr.pop(); //  delete last element 9
//arr.push(10);  //add last element 10 

//! FOR перебор
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


//? Для массива + строка + map , set можно использовать метод for of (only) + element web
for (let value of arr) {
    console.log(value);
}

const arr2 = [3, 5, 7, 12, "yes"];

arr2.forEach(function (item, i, arr2) {
    console.log(`${i}: ${item} внутри массива ${arr2}`);
});

//TODO: Разделитель если пользователь прислал тектс - через запятую

//const strSplit = prompt("", "");

//const products = strSplit.split(","); // делим через , и без пробела
//console.log(products);
//console.log(products.join(": ")); // Склеиваем массив обратно с : и пробелом  = asd: бывбds: 3: sd

const numArr = [22, 4, 6, 13, 3];
numArr.sort();
console.log(numArr); //(5) [13, 22, 3, 4, 6]


//! --------------------------------------------------
function compareNum(a, b) {
    return a - b;
}
//! --------------------------------------------------

// Эллеметны на странице - по факту псевдо массивы
// Совпадают структуры [ ]  [  ]. только у них нет методов !

//TODO: Lesson 22  Spread .

//соединение 2 obj
const addObj = {
    a: 17,
    e: 20,
};

const addObj2 = {
    f: 30,
    c: 100,
};
console.log("assign method");
console.log(Object.assign(addObj, addObj2));   //Поверхностная копия 

//! Для отдельной копии - 

// const clone = Object.assign({}, add);
// clone.d = 20;
// console.log(addObj);  //TODO: -->   {d: 17, e: 20}
// console.log(clone);   //TODO: -->   {D: 20, e: 20}  изменится

//! Method for create a new array ------------------------- Etention ! ----------------

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();

newArray[1] = "adasdads";
console.log(newArray);   //(3) ["a", "adasdads", "c"]
console.log(oldArray);   //(3) ["a", "b", "c"]

//! 4 variant ES6     spread   ( ... ) ! 

const video = ["youtube", "vimeo", "rutube"],
    blogs = ["wordpress", "livejournal", "blogger"],
    internet = [...video, ...blogs, "vk", "facebook"];

console.log(internet);  // (8) ["youtube", "vimeo", "rutube", "wordpress", "livejournal", "blogger", "vk", "facebook"]

//---------------
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num2 = [2, 5, 7];

log(...num2);

//---------------
const array2 = ["a", "b", "c"];
const newArray2 = [...array2];
console.log(newArray2); //[ 'a', 'b', 'c' ]
newArray2[2] = 12;
console.log(array2);    //[ 'a', 'b', 'c' ]
console.log(newArray2); //[ 'a', 'b', 12 ]
//---------------

//TODO: new Object clone 
const objSpreadOperator = {
    one: 1,
    two: 2,
};

const newSpreadOp = { ...objSpreadOperator };
console.log(newSpreadOp);
//---------------

//TODO: Lesson 23  OOP

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log("Hi man Hello");
    }
};


// const john = {
//     health: 100,

// };

// Object.setPrototypeOf(john, soldier);
//! PROTO OBJECT ! Create 
const john = Object.create(soldier);
john.sayHello();

//----------------------------------------
















// const cars = {
//     axle: "rear",
//     color: "red",
//     name: "Audi",
//     size: "5m",
//     year: 2000,
//     city: {
//         daugavpils: 3,
//         riga: 4,
//         ventspils: 5,
//         Russia: {
//             Moskow: 10,
//             Piter: 4,
//         }
//     },
//     information: "It is a good car!",
// };

// console.log(cars);
// console.log(Object.keys(cars).length);
// for (let keyCar in cars) {

//     if (typeof cars[keyCar] === "object") {
//         for (let objKeyCar in cars[keyCar]) {
//             if (typeof cars[objKeyCar] === "object") {
//                 for (let secondObj in cars[objKeyCar]) {
//                     console.log(`Информация о машине ${secondObj} со значением ${cars[keyCar][secondObj]}`);
//                 }
//             } else {
//                 console.log(`Информация о машине ${objKeyCar} со значением ${cars[keyCar][objKeyCar]}`);
//             }
//         }
//     } else {
//         console.log(`Информация о машине ${keyCar} со значением ${cars[keyCar]}`);
//     }
// }