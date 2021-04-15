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


