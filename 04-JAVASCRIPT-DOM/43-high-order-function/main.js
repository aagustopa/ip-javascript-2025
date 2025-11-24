const frutas = ['Plátanos', 'Bananas', 'Piñas', 'Manzanas', 'Peras', 'Piñas', 'Uvas', 'Pomelos'];
const nums = [2, 4, -13, 15, 14];
//* Funciones 4
//* Crea una función que recibe como parámetro una fruta como string y devuelve la posicion del array donde esté esa fruta.
//* Si no encuentra el elemento que devuelva -1 ;
//* Guarda el valor que retorna la función y imprimela en la consola.


function searchIndex(valorABuscar, array) {
    // for (let i = 0; i < array.length; i++) {
    // for (const i in array) {
    //     const valorDelArray = array[i];

    //     if (valorDelArray === valorABuscar) {
    //         return i;
    //     }
    // }
    // return -1;


    let indiceEncontrado = -1;
    array.forEach((value, index) => {
        // const valorDelArray = array;
        // const i = index;
        // console.log(valorDelArray);
        // if (valorDelArray === valorABuscar) {
        //     console.log('existe');
        //     return i;
        // }
        // const valorDelArray = value;
        // const i = index;
        // console.log(`${i}: ${valorDelArray}`);
        // console.log(`valor ${value}`);
        // console.log(`parametro usuario ${valorABuscar}`);
        // console.log(index);

        // console.log(valorABuscar);
        if (valorABuscar === value && indiceEncontrado === -1) {
            indiceEncontrado = index;
        }

    });


    return indiceEncontrado;
}

// searchIndex(frutas)
// searchIndex("", frutas);
// searchIndex("Plátanos", frutas);
// searchIndex("Plátanos", frutas);

// const indexOfPlatanos = searchIndex('Plátanos', frutas);
const indexOfPiñas = searchIndex('Piñas', frutas);

// const indexOf15 = searchIndex(15, nums);
// const indexOf23 = searchIndex(23, nums);

// console.log(indexOfPiñas);
// console.log(indexOfPiñas);

// console.log(indexOf15);
// console.log(indexOf23);

//* Funciones 5
//* Crea una función que reciba el array de frutas y devuelva un string con todas las frutas separadas por una coma y un espacio.
//* ¡No utilizar el método join()
//* ¡¡¡No tiene que haber una coma al final del string!!!
//* Haz una segunda versión en la que tú le pases el separador que quieras.

function joinElementsOfArrayInAString(array, separador = ', ') {
    let stringFinal = '';

    // Podemos validar el que no me pases con un if
    //* Pero también podemos usar un valor por defecto del parámetro arriba en el paréntesis
    // if (separador === undefined) {
    //   separador = ', ';
    // }


    // for (let i = 0; i < array.length; i++) {
    //     const valorDelArray = array[i];

    //     if (i === array.length - 1) {
    //         stringFinal += valorDelArray;
    //     } else {
    //         stringFinal += valorDelArray + separador;
    //     }
    // }

    array.forEach((element, index) => {
        // console.log(`${index} : ${element}`);
        if (index === element.length - 1) {
            stringFinal += element;
        } else {
            stringFinal += element + separador;
        }
    });
    return stringFinal;
}

const frutasConComas = joinElementsOfArrayInAString(frutas);

console.log(frutasConComas);