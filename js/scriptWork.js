"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// if (numberOfFilms  NaN) {
//     console.log("not a num");
// } else {
//     console.log("ok it is num");
// }

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


for (let i = 0; i < 2; i++) {

    const a = prompt("Один из последних фильмов ?", ""),
        b = prompt("На сколько вы его оцениваете ?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 2) {

        personalMovieDB.movies[a] = b;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы класический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман.");
} else {
    console.log("Error");
}

// personalMovieDB.movies[a] = b; //! Запись в обьект - ключ (a) + значение (b).... а = ответ на вопрос ! а не номер.
// personalMovieDB.movies[c] = d;

console.log(personalMovieDB);