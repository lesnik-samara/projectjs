// const result = confirm('Are you here?')
// console.log(result);

// const answer = prompt("Вам есть 19?", "12"); 
// console.log(answer + 5);

// const answers = [];
// answers[0] = prompt('как дела?', '');
// answers[1] = prompt('сколько лет?', '');
// answers[2] = prompt('всё?', '');

// document.write(answers);

const category = "toys";

console.log(`http://someurl.com/${category}/5`);

const user = "Ivan";
alert(`Привет, ${user}`);

let incr = 10,
    decr = 10;

// incr++;
// decr--;

console.log(incr++, --decr);

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


