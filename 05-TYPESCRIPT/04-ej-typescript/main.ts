//* 1. Crea un array de películas con la siguiente informacion:

/* 
const movies = [
  {
    id: nanoid(5),
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    genre: 'Crime',
    cast: [
      'Tim Robbins',
      'Morgan Freeman',
      'Bob Gunton'
    ]
  },
];
*/

// const movies: string[] = [];

const movies: { id: string, title: string, year: number, director: string, genre: string } = {
  id: '2',
  title: 'The Shawshank Redemption',
  year: 1994,
  director: 'Frank Darabont',
  genre: 'Crime',
}

console.log(movies);


//* 2. Típalo de la mejor manera posible.
//* 3. Crea una función `printMovies` que imprima la lista de películas en pantalla.

// function printMovies(): void {
  // for (let i = 0; i < movies.length; i++) {
  // console.log(movies[i]);
  // }
  // movies.forEach(element => {
    // console.log(element);

  // });
// }

/*
printMovies();

"The Shawshank Redemption: 1994 --> Director: Frank Darabont"
"......"
*/
//* 4. Crea una función `addMovie` que recibe un objeto de tipo película con la información de una película y lo añade a la lista de películas.
//* 5. Crea una función `deleteMovie` que recibe un id de película y lo elimina de la lista de películas.
//* 6. Crea una función `updateMovie` que recibe un id de película y un objeto de tipo película y lo actualiza en la lista de películas.
