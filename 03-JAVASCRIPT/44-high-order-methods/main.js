//? Ya existe una función en JavaScript que recorre cualquier array, y en el callback te REGALA cada valor, el índice, y el array entero

//* .forEach()
const frutas = ['🍎', '🍓', '🍊'];
/* 
frutas.forEach(( fruta , i) => console.log(`Fruta ${i + 1}`));


//* Si quieres hacerlo con una función ya creada, no hay problema


const nums = [2, 4, 6, 8, 10];
const arrayNumerosTriplicado = [];

function triplicarArrayNumeros (num) {
  arrayNumerosTriplicado.push(num * 3);
}

nums.forEach(triplicarArrayNumeros);
console.log(arrayNumerosTriplicado);
 */
//****************************************************/
//****************************************************/

const users = [{
        id: 1,
        name: 'Ivan',
        age: 38,
        city: 'Barcelona',
        isAdmin: false
    },
    {
        id: 2,
        name: 'Javier',
        age: 25,
        city: 'Madrid',
        isAdmin: false
    },
    {
        id: 3,
        name: 'Antonio',
        age: 45,
        city: 'Valencia',
        isAdmin: false
    },
    {
        id: 4,
        name: 'María',
        age: 30,
        city: 'Bilbao',
        isAdmin: false
    },
    {
        id: 5,
        name: 'Laura',
        age: 28,
        city: 'Madrid',
        isAdmin: false
    },
    {
        id: 6,
        name: 'Pedro',
        age: 35,
        city: 'Zaragoza',
        isAdmin: false
    },
];



function findUserIvan() {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];

        if (user.name === 'Ivan') {
            return user;
        }
    }
}

const userIvan = findUserIvan();
userIvan.isAdmin = true;

function findUserZaragoza() {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];

        if (user.city === 'Zaragoza') {
            return user;
        }

    }
}

const userZaragoza = findUserZaragoza();
userZaragoza.age += 1;


//* Voy a hacer una función que sirva para encontrar objetos en un array

function findValue(array, fn) {
    for (let i = 0; i < array.length; i++) {
        const value = array[i];

        if (fn(value, i)) {
            return value;
        }

    }

}


const userMadrid = findValue(users, (user) => {
    if (user.city === 'Madrid') {
        return true;
    } else {
        return false;
    }
});

console.log(userMadrid);


const userId3 = findValue(users, (user, index) => {
    if (user.id === 3) return true
    else return false
});



const mandarina = findValue(frutas, (fruta) => {
    return fruta === '🍊' ? true : false;
})

console.log(mandarina);


const userOlderThan45 = findValue(users, (user) => {
    return user.age > 45;
});


const userNameLongerThan6 = findValue(users, (user) => user.name.length > 6);

console.log(userNameLongerThan6);

//****************************************************/
//****************************************************/

//? Ya tenemos una función nativa que encuentra elementos dentro de un array

//* array.find()

const userFromBarcelona = users.find((user) => {
    return user.city === 'Barcelona' ? true : false;
});

console.log(userFromBarcelona);



//* Existe otro método de los arrays que es IDÉNTICO AL .find(), pero que te devuelve siempre un ARRAY con TODOS LOS QUE COINCIDAN CON LA CONDICIÓN, no solo uno

//! NORMA: Todos los que el callback retorne true, estarán en el nuevo array, los que retornen false, NO.
//! Si no encuentra ninguno, te devolverá un ARRAY VACÍO

//? array.filter();

const usuariosMadrid = users.filter((user) => { return user.city === 'Madrid' });

console.log(usuariosMadrid);


//* con el filter podemos hacer un "truquito" para ELIMINAR ELEMENTOS DE UN ARRAY sin el splice.
//* el truquito es simple, si por ejemplo quiero eliminiar un objeto con el id: 3, solo tengo que filtrar el array y que el filter me devuelva un array con todos los elementos QUE NO SON EL ID 3

let arrayEliminar = [ // 0x111
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
]

const idToDelete = 3;

for (const index in arrayEliminar) {
    const element = arrayEliminar[index];

    if (element.id === idToDelete) {
        arrayEliminar.splice(index, 1);
    }
}

console.log(arrayEliminar); // 0x111

//* Ahora quiero borrar el de ID 4

// const arrayEliminarSin4 = arrayEliminar.filter((element) => {
//   return element.id !== 4;
// });


arrayEliminar = arrayEliminar.filter((element) => element.id !== 4); // 0x456

console.log(arrayEliminar);

//****************************************************/
//****************************************************/
//****************************************************/


//* Tenemos otro método nativo de Javascript para los arrays que FUNCIONA IGUAL QUE FIND Y FILTER pero que nos devuelve UN SOLO Dígito y s el índice del elemento a buscar
//* Es decir es como el indexOf() pero para buscar objetos dentro de un array

const nums = [2, 4, 6, 8];

console.log(nums.indexOf(6));

//! con objetos no vale

console.log(users.indexOf('Antonio'));


//? array.findIndex();

const userAntonio = users.findIndex((user) => user.name === 'Antonio');

console.log(userAntonio);


//****************************************************/
//****************************************************/
//* Tengo 2 más que también funcionan de forma IDÉNTICA al .find()
//? Sirven para preguntar

//? .some()
//? .every()

//? Some sirve para preguntar si ALGUNO cumple una condición
const algunoMenorDeEdad = users.some((user) => user.age < 18);
console.log(algunoMenorDeEdad);

//? Every sirve para preguntar si TODOS cumplen una condición
const todosSonMayorDeEdad = users.every((user) => user.age >= 18);
console.log(todosSonMayorDeEdad);