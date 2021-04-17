"use strict";
////////////////////ПЕРЕМЕННЫЕ/////////////

//a = 14;
///console.log(a);

///let number = 5;
///const leftBorderWidth = 1;

///number = 10;
///console.log(number);

///const obj = {
   // a: 50
///};

///obj.a = 10;

///console.log(obj);

///console.log(name);
///var name = 'Ivan';

/////////////////////////////////////////////


/////////////////////////ТИПЫ ДАННЫХ/////////////////
///ЧИСЛА

//let number = 4.6;

//console.log(4/0); //infinity
//console.log('string' * 9); //NaN

///СТРОКИ

//const persone = '5'; //string
//const persone = `Alex`; //string

///ЛОГИЧЕСКОЕ ЗНАЧЕНИЕ

//const age = false; //boolean

///NULL

//console.log(something);//null

///UNDEFINED

//let und;
//console.log(und);//undefined

/////ОБЪЕКТЫ

//const obj = {
//    name: "Max",
//  age: 30,
//isMarried: false
//};

//console.log(obj.name);

//МАССИВЫ///
//let arr = ['plum.png', 'orange.jpg', 6, {}, [], 'apple.bmp'];
//console.log(arr[1]);


///ИНТЕРПОЛЯЦИЯ//
//const user = prompt("Как тебя зовут", "");
//alert (`Привет, ${user}`);


///////ОПЕРАТОРЫ//////////

//УНАРНЫЙ ПЛЮС
//console.log(4 + +"5")

//ИНКРИМЕНТ И ДИКРИМЕНТ 

//let incr = 10,
    //decr = 10;

//incr++;//ИНКРИМЕНТ постфикс
//++incr;//префикс
//decr--; //ДИКРИМЕНТ постфикс
//--decr; // префикс


///ВОЗВРАЩЕНИЕ ОСТАТКА ОТ ДЕЛЕНИЯ (%)//////

//console.log(5%2);

////ПРИСВАЕВАНИЕ "=" 1 раз
////СРАВНЕНИЕ "==" 2 раза
////СТРОГОЕ СРАВНЕНИЕ "===" 3 раза

///ЛОГИЧЕСКИЕ ОПЕРАТОРЫ И - ИЛИ 
// &&
// ||

//const isChecked = true,
//      isClose = true;

//console.log(isChecked && isClose);

//const isChecked = true,
//      isClose = false;

//console.log(isChecked || isClose);

//ОПЕРАТОР ОТРИЦАНИЯ "!" (ВОСКЛИЦАТЕЛЬНЫЙ ЗНАК)
//const isChecked = true,
//      isClose = false;

//console.log(isChecked || !isClose);

//ПОРЯДОК ВЫПОЛНЕНИЯ ОПЕРАТОРОВ
//const.log( 2+ 2 * 2 === 6)


//////////////////УСЛОВИЯ//////////////////

//if (4 == 4) {
//    console.log('Ok!');
//} else {
//    console.log('Error!');
//}

//const num = 50;

//if (num < 49) {
//    console.log('Error!');
//} else if (num > 100) {
//    console.log('Много!');
//} else {
//    console.log('Ok!');
//}

///////ТЕРНАНРНЫЙ аргумент/////

//const num = 50;

//(num === 50) ? console.log('OK!') : console.log('Error');
//4 + 4 ///бинарный аргумент
//+'4'; ///унарный аргумент


/////////КОНСТРУКЦИЯ SWITCH (строгое сравнение)////////////
//const num = 50;

//switch(num) {
//    case 49:
//        console.log('Error!');
//        break;
//    case 100:
//        console.log('Error!');
//        break;
//    case 50:
//        console.log('OK!');
//        break;
//    default:
//        console.log('Не в этот раз!');
//        break;
//}

/////////////////////ЦИКЛЫ//////////////////

//let num = 50;

//while (num < 55) {
//    console.log(num);
//    num++;
//}


//do {
//    console.log(num);
//    num++; 
//}
//while (num <55);

///
//for (let i = 1; i < 8; i++) {
//    console.log(i);
//    num++;
//}

//for (let i = 1; i < 8; i++) {
//    if (i === 6) {
//        break;
//    }
//   console.log(i);
//}

////////////////////////ФУНКЦИИ////////////////////////////////

//let num = 20; ///глобальная переменная

//function showFirstMessage(text) {
//    console.log(text);
//    let num = 20; ///локальная переменная
//    console.log(num);
//}

//showFirstMessage("Hello world");
//console.log(num);

//function calc(a, b) {
//    return (a+b);
//}

//console.log(calc(4, 3));

//function ret() {
//    let num = 50;

//    return num;
//}

//const anotherNum = ret();

///классификация функций 
//1. Function Declaration - Создается для начала выполнения скрипта, можно вызвать перед объявлением.
//  function foo() {
//    code
//}

//2. Function Expression - Создается только тогда,  когда доходит поток кода, можно вызвать только после объявления.
//let foo = function() {
//    code
//}
// const logger = function() {
//     console.log('Hello');
//};

//3. Стрелочные функции - Не имеет своего контекста

//const calc = (a, b) => a + b;


/////////////////
//СВОЙСТВА
// const str = "test";
// const arr = [1,2,3];

// console.log(str.length);

///МЕТОДЫ
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));

// const logg = "Hello World";

// console.log(logg.slice(6, 11)); // начало - конец ( можно минусы )
// console.log(logg.substring(6, 11)); // начало - конец ( без минусов 
// console.log(logg.substr(6, 5)); //начало - количество

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));


//ДЗ//////
// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//     while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     }
// }

// start();

// const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false
// };

// for (let i = 0; i <2 ; i++) {
//    const a = prompt("Один из последних просмотренных фильмов?", ""),
//          b = prompt("На сколько оцените его", "");
   
//    if (a != null && b != null && a != "" && b != "" && a.length <50) {
//        personalMovieDB.movies[a] = b;
//        console.log("done");
//    } else {
//        console.log("Error");
//        i--;
//    }
          
// }

// function rememberMyFilms() {
//     for (let i = 0; i <2 ; i++) {
//         const a = prompt("Один из последних просмотренных фильмов?", ""),
//               b = prompt("На сколько оцените его", "");
        
//         if (a != null && b != null && a != "" && b != "" && a.length <50) {
//             personalMovieDB.movies[a] = b;
//             console.log("done");
//         } else {
//             console.log("Error");
//             i--;
//         }
               
//      }
// }

// rememberMyFilms();


// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено мало фильмов");
//      } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
//         console.log("Вы классический зритель");
//      } else if (personalMovieDB.count >=30) {
//         console.log("Вы киноман");
//      } else {
//         console.log("Error");
//      }
// }

// detectPersonalLevel();

// function showMyDB() {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB();

// function writeYourGenres() {
//     const a = prompt("Ваш любимый жанр под номером 1", ""),
//           b = prompt("Ваш любимый жанр под номером 2", ""),
//           c = prompt("Ваш любимый жанр под номером 3", "");
//     personalMovieDB.genres[0] = a;
//     personalMovieDB.genres[1] = b;
//     personalMovieDB.genres[2] = c;
// }

// writeYourGenres();

////////////////////CALLBACK////////////////
// function first() {
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// learnJS('JavaScript', function() {
//     console.log('Я прошел этот урок!');
// });


// function movies(fav, callback) {
//     console.log(`Мой любимый фильм: ${fav}`);
//     callback()
// }

// movies('Titanik', function() {
//     console.log('А твой');
// });


/////////////////ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ////////////////////

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("test"); ///// САМОДЕЛЬНЫЕ МЕТОДЫ
//     }
// };

// const {border, bg} = options.colors;
// console.log(bg); //// деструктуризация


// options.makeTest();

// for (let key in options) {    ////////ПЕРЕБОР КЛЮЧЕЙ В ОБЪЕКТЕ
//     if (typeof options[key] === "object") {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`); 
//         }     
//     }else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }

// console.log (Object.keys(options).length); //СЧЕТ КЛЮЧЕЙ В ОБЪЕКТЕ СОЗДАВАЯ ИЗ КЛЮЧЕЙ МАССИВ  (ВСТРОЕННЫЕ МЕТОДЫ)


///////////////МАССИВЫ//////////////////


// const arr = [1, 2, 3, 6, 8];
// console.log(arr.length);
// arr[99] = 0;
// arr.pop();

// console.log(arr); // удаление элемента с конца массива
// arr.push(10); // добавление элемента в конец массива

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(function(num, i, arr){
//     console.log(`${i}: ${num} внутри массива ${arr}`);
// });


// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();

// function compareNum(a, b) {
//     return a-b;
// }

// console.log(products.join('; '));


//////////////////////////////////////////////////

// const num = {
//     first: 10,
//     second: 20
// };

// const clone = num;

// clone.second = "LOL";

// console.log(clone)

// const quiz = {
//     name: "",
//     age: "",
//     work: "",
// //     married: ""
// // };
// // function question() {
// //     quiz.name = prompt("Whats your name?");
// //     quiz.age = prompt("How old are you?");
// //     quiz.work = prompt("Whats your profession?");
// //     quiz.married = prompt("Are you married?");
// // }

// // question();

// // if (quiz.age < 18 ) {
// //     alert(`Excuse me, ${quiz.name}, for this profession u have to be older than 18.`);
// // } else {
// //     alert(`Welcome to our company ${quiz.name}!`);
// // }

// // console.log(quiz);


// //////////////ПЕРЕДАЧА ДАННЫХ ПО ССЫЛКЕ И ПО ЗНАЧЕНИЮ /////////////

// let a = 5,
//     b = a;

// b = b + 5;

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //ссылка

// copy.a = 10;

    // function copy(mainObj) {
    //     let objCopy = {};

    //     let key;
    //     for(key in mainObj) {
    //         objCopy[key] = mainObj[key];
    //     }

    //     return objCopy;
    // }

    // const numbers = {
    //     a: 2,
    //     b: 5,
    //     c: {
    //         x:4,
    //         y:9
    //     }
    // };

    // const newNumbers = copy(numbers);

    // newNumbers.a = 10;

    // const add = {
    //     d:17,
    //     e: 20
    // };

    // const clone = Object.assign(numbers, add);

    // clone.d = 20;

    // const oldArray = ['a', 'b', 'c'];
    // const newArray = oldArray.slice();

    // newArray[1] = 'o';

    // ///////////////SPREAD////////////
    // const video = ['youtube', 'vimeo', 'rutube'],
    //       blogs = ['wordpress', 'livejournal', 'blogger'],
    //       internet = [...video, ...blogs, 'vk', 'instagram'];

    // console.log(internet);

    // function log(a, b , c) {
    //     console.log(a);
    //     console.log(b);
    //     console.log(c);
    // }

    // const num = [2, 5, 7];

    // log(...num);

    // const array = ["a", "b"];

    // const newAarray = [...array];

    // const q = {
    //     one: 1,
    //     two: 2
    // };

    // const newObj = {...q};

    // console.log(newObj);
     
    