const arrayFrutas = [{
        nombre: 'plátano',
        procedencia: 'Islas Canarias',
        cantidad: 5,
        emoticono: '🍌'
    },
    {
        nombre: 'manzana',
        procedencia: 'Marruecos',
        cantidad: 2,
        emoticono: '🍎'
    },
    {
        nombre: 'uvas',
        procedencia: 'La Rioja',
        cantidad: 10,
        emoticono: '🍇'
    },
    {
        nombre: 'aguacate',
        procedencia: 'Perú',
        cantidad: 0,
        emoticono: '🥑'
    },
    {
        nombre: 'pera',
        procedencia: 'Toledo',
        cantidad: 7,
        emoticono: '🍐'
    },
    {
        nombre: 'sandía',
        procedencia: 'Marruecos',
        cantidad: 0,
        emoticono: '🍉'
    }
]


// Encuentra la fruta que tenga más de 5 unidades
// const frutaMas5Stock = arrayFrutas.find((fruta) => { 
//   // if (fruta.cantidad > 5) return true;
//   // else return false;

//   // return fruta.cantidad > 5 ? true : false;

//   return fruta.cantidad > 5;
// });
const frutaMas5Stock = arrayFrutas.find(fruta => fruta.cantidad > 5);

// console.log(frutaMas5Stock);

// Encuentra una fruta de Marruecos

const frutaMarruecos = arrayFrutas.find(fruta => fruta.procedencia === 'Marruecos');
// console.log(frutaMarruecos);

frutaMarruecos.cantidad += 5;

// console.log(frutaMarruecos);


// Encuentra la fruta que tenga menos de 5 unidades y luego imprime su emoticono en consola

const frutaMenos5Stock = arrayFrutas.find(fruta => fruta.cantidad < 5);
// console.log(frutaMenos5Stock.emoticono);

// Encuentra la fruta que venga de Canarias y súmale 2 a su cantidad
const frutaCanarias = arrayFrutas.find(fruta => fruta.procedencia.toLowerCase().includes('canarias'));

// console.log(frutaCanarias);



// Crea un array con todas las frutas que sean de Marruecos y luego usando un forEach imprimes en consola los nombres de las frutas en mayúscula

const frutasMarruecos = arrayFrutas.filter((fruta) => {
    return fruta.procedencia === 'Marruecos';
})

// console.log(frutasMarruecos);

arrayFrutas.forEach(element => {
    const frutas = element.nombre;
    frutas.toUpperCase;
    // console.log(frutas);
});


// Coge todas las frutas que no tienen stock y le añades a cada una 10 frutas




// Crea un array con todas las frutas que sean de Marruecos y luego usando un forEach imprimes en consola los nombres de las frutas en mayúscula
const frutasMarruecoss = arrayFrutas.filter((fruta) => { return fruta.procedencia.toLowerCase().includes('marruecos') });

// frutasMarruecoss.forEach(fruta => console.log(fruta.nombre));

// Coge todas las frutas que no tienen stock y le añades a cada una 10 frutas

const frutasSinStock = arrayFrutas.filter(fruta => fruta.cantidad === 0);

frutasSinStock.forEach(fruta => fruta.cantidad += 10);




//****************************************************/
//****************************************************/
//****************************************************/

// Si hay alguna fruta peruana muestra en consola "Arriba el Perú"

// Si todas las frutas tienen stock, muestra en consola "Vas bien, no hace falta comprar nada"

const frutaPeruana = arrayFrutas.some((fruta) => fruta.procedencia === 'Perú');
// console.log(frutaPeruana);

const stocks = arrayFrutas.every((fruta) =>
    fruta.cantidad > 0 ? console.log('vas bien, no hace falta comprar nada') : console.log('tienese que comprar'));
// console.log(stocks);


// Crea un array nuevo con las frutas ordenadas por cantidad de mayor a menor

const newArrayQuantity = arrayFrutas.map(item => item.cantidad);
console.log(`no ordenada ${newArrayQuantity}`);
// console.log(newArrayQuantity);

const quantityInOrder = newArrayQuantity.toSorted((a, b) => {
    if (b > a) return 1;
    else if (b < a) return -1;
    else return 0;
});
const quantityInOrderB = [...arrayFrutas].toSorted((a, b) => {
    if (b.cantidad > a.cantidad) return 1;
    else if (b.cantidad < a.cantidad) return -1;
    else return 0;
});
// console.log(`ordenada de mayor a menor ${quantityInOrder}`);
// console.log(quantityInOrderB);
console.log(quantityInOrderB.map(fruta => fruta.cantidad));



// Crea otro array ordenado por los nombres de las frutas de la Z a la A
const newArrayNames = arrayFrutas.map(item => item.nombre);
console.log(newArrayNames);

const namesInOrder = [...newArrayNames].sort((nameB, nameA) => {
    if (nameB.toLowerCase() < nameA.toLowerCase()) return -1;
    else if (nameB.toLowerCase() > nameA.toLowerCase()) return 1;
    else return 0;
})

console.log(namesInOrder);