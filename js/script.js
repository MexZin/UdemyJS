"use strict";

const numberOfFilms = +prompt('Skolko filmov vi uje posmotreli?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres: [],
    privat: false
};

const a = prompt("odin iz poslednix prosmotrenix filmov?", ''),
      b = prompt('ocenka?', ''),
      c = prompt("odin iz poslednix prosmotrenix filmov?", ''),
      d = prompt('ocenka?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);