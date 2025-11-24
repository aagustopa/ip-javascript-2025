//? Desestructuración

//* De arrays

const frutas = ['🍎', '🍐', '🍌'];
const pera = frutas[1];
const platano = frutas[2];


// sin desestructuracion

// const texto1 = `Me gustan las ${frutas[1]}.`;
const texto1 = `Me gustan las ${pera}.`;
console.log(texto1);

// const texto2 = `No me gustan los ${frutas[2]}`;
const texto2 = `No me gustan los ${platano}`;
console.log(texto2);


// con desestructuracion
const users = ['Ivan', 'Carlos', 'Carmen'];

// const ivan = users[0];
// const [nombre1, nombre2, nombre3] = users;

//! En desestructuracion de arrays, no es necesario usar todas las variables si no las vas a usar, puedes dejar espacios vacíos
const [ivan, , carmen] = users;


const textoUsers1 = `El usuario ${ivan} es amigo de ${carmen}`;
console.log(textoUsers1);



function mathOperations(num1, num2) {
  const add = num1 + num2;
  const substract = num1 - num2;
  const multiply = num1 * num2;
  const divide = num1 / num2;


  return [add, substract, multiply, divide];
}



const operations5and7 = mathOperations(5, 7);

// const add5and7 = operations5and7[0];
// const substract5and7 = operations5and7[1];

const [add5and7, , , divide5and7] = operations5and7;

console.log(add5and7);
console.log(divide5and7);


// es más, esto normalmente lo hacemos más corto aún, desestructuramos DIRECTAMENTE EL RETORNO DE LA FUNCIÓN.

const [, resta3y2] = mathOperations(3, 2);

console.log(resta3y2);


//****************************************************/
//****************************************************/

//* En objetos


const product1 = {
  id: 1,
  title: "Essence Mascara Lash Princess",
  description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and ,lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
  category: "beauty",
  price: 9.99,
  discountPercentage: 7.17,
  rating: 4.94,
  stock: 5,
  images: [
    "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
  ]
};

// sin desestructurar
// const title = product1.title;
// const description = product1.description;

// con desestructuración
const { title, stock, description, images, rating, price } = product1;

console.log(title);
console.log(stock);


const textProduct1 = `
  ${title}
  ${images[0]}
  ${description}
  ${price}€   Rating: ${rating}
  Stock: ${stock}
`


console.log(textProduct1);


//! Lo malo es que no le puedo cambiar el nombre a las variables
//* No pasa nada, podemos usar alias de variables usando dos puntos :

const product2 = {
  id: 2,
  title: "Labial rojo",
  description: "Labial supermolon de color rojo chillón que además infla los labios.",
  category: "beauty",
  price: 12.99,
  discountPercentage: 10.14,
  rating: 4.98,
  stock: 15,
  images: [
    "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
  ]
};


const { 
  title: title2, 
  description: description2, 
  price: price2, 
  stock: stock2, 
  images: images2, 
  rating: rating2 
} = product2;



const textProduct2 = `
  ${title2}
  ${images2[0]}
  ${description2}
  ${price2}€   Rating: ${rating2}
  Stock: ${stock2}
`;

console.log(textProduct2);


function mathOperationsObj (num1, num2) {
  const add = num1 + num2;
  const substract = num1 - num2;
  const multiply = num1 * num2;
  const divide = num1 / num2;


  return {
    suma: add,
    resta: substract,
    multi: multiply,
    dividir: divide
  };
}


const operations1and2 = mathOperationsObj(1, 2);

const { multi } = operations1and2;

console.log(multi);


const { dividir } = mathOperationsObj(5, 4);
console.log(dividir);

const { dividir: dividir3y7 } = mathOperationsObj(3, 7);

console.log(dividir3y7);


//****************************************************/
//****************************************************/
//? Resumen

//* ARRAYS
//* No importa cómo llames a las variables
//! Lo importante es la posición en que las desestructuras, la primera guardará el primer valor y así sucesivamente
//* PAra acceder a elementos lejanos sin usar los primeros dejamos espacios con comas

//* OBJETOS
//* No importa la posición
//! Lo importante es que llames a las variables IGUAL QUE LAS PROPIEDADES DEL OBJETO
//* Si quieres puedes dar un alias a los nombres de las variables usando :



//* Este mola más
function upperAndLower (text) {
  return [text.toUpperCase(), text.toLowerCase()];
}


//! este con pocas cosas y si lo vas a reutilizar mucho no mola
function upperAndLower2 (text) {
  return {
    upper: text.toUpperCase(),
    lower: text.toLowerCase()
  };
}


const [manzanaMayus] = upperAndLower('Manzana');
const [peraMayus] = upperAndLower('Pera');
const [platanoMayus] = upperAndLower('Plátano');


const { upper: upperManzana } = upperAndLower2('Manzana');
const { upper: upperPera } = upperAndLower2('Pera');


//****************************************************/
//****************************************************/
//* Ejercicios

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

// Desestructuráis las propiedades name, gender y films, pero quiero que films se pase a llamar peliculas. Que salgan en consola

const {name, gender, films: peliculas} = luke;

console.log(name);
console.log(gender);
console.log(peliculas);

// Como ahora tenéis el array de películas guardado en una variable nueva, quiero que desestructuréis la primera, la segunda y la cuarta película. Que salgan en consola

const [primera, segunda, , cuarta] = peliculas;

console.log(primera);
console.log(segunda);
console.log(cuarta);