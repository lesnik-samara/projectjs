// "use strict";

// let number = 5;
// const LeftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log('string' * 9);

// const persone = '5';

// const bool = true;

// const obj = {
//     name: "John",
//     age: 25,
//     isMariied: false
// };

// // console.log(obj.age);
// console.log(obj["name"]);

// let arr = ['oran.png', 24, ["ust", 3]];
// console.log(arr[2]);


const numberOfFilms = +prompt ('Сколько фильмов вы посмотрели?', '');

const personalMovieBD = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};

const movies = prompt("Один из поледних просмотренных фильмов", "");
const movies2 = prompt("Рейтинг", "");

const a = prompt('Последний фильм', ''),
      b = prompt('рейтинг',''),
      c = prompt('Последний фильм', ''),
      d = prompt('рейтинг','');

personalMovieBD.movies[a] = b;
personalMovieBD.movies[c] = d;

console.log(personalMovieBD);