"use strict";
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
let personalMovesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('один из просмотренных фильмов ?', ""),
    b = prompt('на сколько оцените его?', ""),
    c = prompt('один из просмотренных фильмов?', ""),
    d = prompt('на сколько оцените его?', "");
personalMovesDB.movies[a] = b;
personalMovesDB.movies[c] = d;
console.log(personalMovesDB);