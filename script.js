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

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", "");
const b = prompt("На сколько оцените его", "");
const c = prompt("Один из последних просмотренных фильмов?", "");
const d = prompt("На сколько оцените его", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

alert("Hi");