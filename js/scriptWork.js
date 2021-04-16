"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt("Один из последних фильмов ?", ""),
    b = +prompt("На сколько вы его оцениваете ?", ""),
    c = prompt("Один из последних фильмов ?", ""),
    d = +prompt("На сколько вы его оцениваете ?", "");

personalMovieDB.movies[a] = b; //! Запись в обьект - ключ (a) + значение (b).... а = ответ на вопрос ! а не номер.
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);