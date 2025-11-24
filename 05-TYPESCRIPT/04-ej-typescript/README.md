# Ejercicio para TypeScript

Crea un gestor de películas con TypeScript.

## Pasos

1. Crea un array de películas con la siguiente informacion:

```js 
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
```

2. Típalo de la mejor manera posible.
3. Crea una función `printMovies` que imprima la lista de películas en pantalla.
   ```js
   printMovies();

   // The Shawshank Redemption: 1994 --> Director: Frank Darabont
   ```
4. Crea una función `addMovie` que recibe un objeto de tipo película con la información de una película y lo añade a la lista de películas.
5. Crea una función `deleteMovie` que recibe un id de película y lo elimina de la lista de películas.
6. Crea una función `updateMovie` que recibe un id de película y un objeto de tipo película y lo actualiza en la lista de películas.

---