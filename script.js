"use strict";
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
let personalMovesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
for (let i = 0; i < 2; i++) {
    const a = prompt('один из просмотренных фильмов ?', ""),
        b = prompt('на сколько оцените его?', "");

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovesDB.movies[a] = b;
        console.log("done");
    } else {
        console.log("error");

        i--;
    }

}

if (personalMovesDB.count < 10) {
    console.log('Просмотренно довольно мало фильмов');
} else if (personalMovesDB.count >= 10 && personalMovesDB.count < 30) {
    console.log('вы классический зритель');
} else if (personalMovesDB >= 30) {
    console.log(' Вы киноман')
} else {
    console.log('Error')
}


console.log(personalMovesDB);