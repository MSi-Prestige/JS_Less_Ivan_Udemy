"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
};

function rememberMyFilms() {
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
}
// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("Вы класический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман.");
    } else {
        console.log("Error");
    }
}
// detectPersonalLevel();

// personalMovieDB.movies[a] = b; //! Запись в обьект - ключ (a) + значение (b).... а = ответ на вопрос ! а не номер.
// personalMovieDB.movies[c] = d;

function showMyDB() {
    if (!personalMovieDB.privat) {   // (!) = если false то сработает true - c.log
        console.log(personalMovieDB);
    } else {
        console.log("Private");
    }
}
showMyDB();

function writeYourGenres() {
    let i = 1;
    while (i < 4) {
        const genr = prompt(`Ващ любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genr;
        i++;
    }
    console.log(personalMovieDB);
}

writeYourGenres();


// console.log(personalMovieDB);