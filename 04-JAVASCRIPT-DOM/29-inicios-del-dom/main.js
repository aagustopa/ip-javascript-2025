// Quiero coger el titulo h1 y cambiarle el color a rojo


// vamos a imaginar cómo podría ser un objeto de una etiqueta h1
// const h1 = {
//   texto: 'Inicios del DOM',
//   classes: ['titulo'],
//   id:  'supertitulo'
// }


//? 1- "Cazar" elementos del DOM (etiquetas HTML) y traerlas a este archivo

// Hay un objeto global en JavaScript que nos sirve para ver información de todo el document y que tiene una serie de métodos que nos servirán para trabajar con el DOM
console.log(document);

//* Cazamos UN ELEMENTO por su ID
const h1 = document.getElementById('supertitulo');
console.log(h1);


//* Cazamos UN ELEMENTO usando un selector CSS
//! Solo te caza UNO y siempre será el PRIMERO QUE COINCIDA CON EL SELECTOR
const lista1 = document.querySelector('.lista-1');
console.log(lista1);

//* Podemos cazar un elemento que forme parte de otro

// const item1Lista1 = document.querySelector('.lista-1 li:first-child');

const item1Lista1 = lista1.children[0];
console.log(item1Lista1);


//? 2- Una vez cazado algo ¿Qué puedo hacer? 

//* Ver sus datos

// Su id  👉   .id

console.log(h1.id); // "supertitulo"
console.log(lista1.id); // ""

// Sus clases 👉  .className
console.log(lista1.className);


const fotoPerro = document.querySelector('.foto-1');

// Su src  👉   .src
console.log(fotoPerro.src);

// Su alt=""  👉   .alt
console.log(fotoPerro.alt);


//* Leer su contenido, es el contenido de la etiqueta, no el texto que tenga dentro, si la etiqueta tiene otras etiquetas, veremos TODAS

console.log(h1.innerText); // "Inicios del DOM"
console.log(h1.innerHTML); // "Inicios del DOM"


console.log(lista1.innerText);
console.log(lista1.innerHTML);


//* Si no sabemos cómo acceder a un atributo siempre podemos usar un método genérico 👉  getAttribute()

console.log(fotoPerro.getAttribute('src'));
console.log(fotoPerro.getAttribute('alt'));
console.log(fotoPerro.getAttribute('class'));


//* Cambiar su datos

const user = {
    name: 'Ivan'
}

console.log(user.name);
user.name = 'Carlos'

fotoPerro.src = 'https://picsum.photos/id/238/100';
fotoPerro.alt = 'Foto de una ciudad';



// cambiar el contenido

// h1.innerText = 'Inicios del <u>DOM</u> 😈';
h1.innerHTML = 'Inicios del <u>DOM</u> 😈';


//* Cambiar sus estilos
h1.style.color = 'crimson';
h1.style.backgroundColor = 'pink';

// Normalmente lo que hacemos es crear una class que de los estilos que queremos y le ponemos la clase al elemento desde Javascript
//! fotoPerro.style.outline = '2px solid gold';

// fotoPerro.className += ' outline-gold';

//* Para trabajar con classes de una forma más sencilla, usamos classList en lugar de className. Porque me da unos cuantos métodos para añadir, quitar cambiar clases

// añadir clase
fotoPerro.classList.add('outline-gold', 'margin-0', 'text-red');

// quitar clase
fotoPerro.classList.remove('text-red');

// cambiar una por otra
fotoPerro.classList.replace('margin-0', 'margin-4');



//? 3- Crear elementos desde 0 con JavaScript

//* 1. Crear el elemento nuevo EN MEMORIA, EN JAVASCRIPT

const newLi = document.createElement('li');


//* 2. Añádele contenido

newLi.innerText = 'Item Especial';


//* 3. Añádele clases, atributos, id

newLi.className = 'especial';

//* 4. Añádele estilos

// ! Esto, como he dicho normalmente se hace con clases CSS


//* 5. Añadir el elemento en el DOM
//* Para ello normalmente necesitamos el elemento donde lo queramos meter

const ulLista = document.querySelector('.lista-1');

//* Ahora hay que decirle dónde de dentro quieres que vaya

// Al final de todo  👉  append
ulLista.append(newLi);

// Al principio de todo 👉  prepend
ulLista.prepend(newLi);

// Fuera por encima
ulLista.before(newLi);

// Fuera por debajo
ulLista.after(newLi);


console.log(newLi);