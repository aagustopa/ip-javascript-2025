const userName = 'Ivan';
const userAge = 38;
const userIsMarried = true;

const fruits = ['Manzana', 'Pera', 'Fresa'];


// Dentro de un array no puedo intuir qué es cada valor
// const user = ['Ivan', 38, true];

// En un objeto cada valor tiene un nombre
const user = { name: 'Ivan', age: 38, isMarried: true };



//* Cómo acceder a un elemento de un objeto
console.log(fruits);
console.log(user);


console.log(fruits[1]);
console.log(user['age']);


// Javascript nos facilita el proceso de llamar a propiedades usando la notación del punto    .


console.log(user['name']);
console.log(user.name);
console.log(user.age);
console.log(user.isMarried);


// Y si quiero acceder a un array dentro de un objeto???

const user2 = {
    name: 'Jessica',
    age: 40,
    isMarried: true,
    friends: ['Carlos', 'María'],
    characteristics: {
        hair: 'blonde',
        eyes: 'brown',
        skin: 'white'
    }
};


console.log(user2.friends[1]);

console.log(user2.characteristics['eyes']);
console.log(user2.characteristics.eyes);


// Ahora podemos imaginar cómo trabajamos con arrays y objetos dentro de cualquier web app básica

const minecraftMovies = [
    { title: 'Una película de Minecraft', year: 2025 },
    { title: 'Minecraft: Modo historia', year: 2016 },
    { title: 'Minecraft', year: 2009 }
];


//* Añadir elementos a un objeto o modificarle uno que ya tenga

const car1 = {
    brand: 'Opel',
    doors: 5
};


console.log(car1);

car1.motor = 'diesel';
car1.doors = 3;

console.log(car1);


//* Podemos recorrer un objeto usando el for...in

for (const index in user2) {
    console.log(index);
    // "name"
    // "age"
    // "isMarried"


    console.log(user2[index]);
    // "ivan"
    // 38
    // true
}


for (const index in fruits) {
    console.log(index);
    console.log(fruits[index]);
}


//****************************************************/
//****************************************************/
//* A tocar objetos

//* ========================================== *//

const luke = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
        'https://swapi.dev/api/films/2/',
        'https://swapi.dev/api/films/6/',
        'https://swapi.dev/api/films/3/',
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/7/'
    ],
    species: [
        'https://swapi.dev/api/species/1/'
    ],
    vehicles: [
        'https://swapi.dev/api/vehicles/14/',
        'https://swapi.dev/api/vehicles/30/'
    ],
    starships: [
        'https://swapi.dev/api/starships/12/',
        'https://swapi.dev/api/starships/22/'
    ],
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
    url: 'https://swapi.dev/api/people/1/'
}

console.log('===================================')

// Imprimir en consola:

/*
  "Nombre: Luke Skywalker"
  "Altura: 172"
*/
console.log(`nombre: ${luke.name}`);
console.log(`altura: ${luke.height}`);


// cambiad el color de pelo de "blond" a "brown"
luke.hair_color = "brown";
console.log(`color de pelo: ${luke.hair_color}`);


// Listad en consola las "url" de las películas en las que sale
/*
  "Peli 1: https://swapi.dev/api/films/2/"
  "Peli 2: https://swapi.dev/api/films/4/"
*/

// for in
// ! siempre devuelve los indices en STRING 
for (const pelis in luke.films) {
    // console.log(pelis);
    // let arrayFilms = luke.films;
    console.log(`peli ${Number(pelis)+1}: ${luke.films[pelis]}`);

    // console.log(arrayFilms[pelis]);
}

// for
for (let i = 0; i < luke.films.length; i++) {
    console.log(`peli ${i+1}: ${luke.films[i]}`);
}


// Imprime en consola el color de ojos usando los corchetes para llamar a la propiedad "eye_color"
console.log(luke["eye_color"]);