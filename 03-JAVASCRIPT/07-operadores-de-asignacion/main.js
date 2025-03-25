//? Operadores de asignación

//* Asignar o reasignar un valor   👉   =

let nombre = 'Ivan';

nombre = 'Carlos';

//* Reasignar un nuevo valor aplicando directamente una operación matemática puedo usar uno de los siguientes operadores.
//*   +=
//*   -=
//*   *=
//*   /=
//*   %=



let edad = 38;

edad = edad + 2; // 🤯  40
edad = edad + 3; // 🤯  43

edad = edad + 1; // 🤯  44
edad += 1; // 45

edad = edad - 1; // 44
edad -= 1; // 43



edad = edad * 2; // 86
edad *= 2; // 172

edad = edad / 2; // 86
edad /= 2; // 43


edad = edad % 2; // 1
edad %= 2; // 1




//****************************************************/
//****************************************************/

//* Existe una forma aún más corta, pero solo cuando sumamos o restamos 1

edad = edad + 1; // forma larga   2
edad += 1; // forma corta         3
edad++; // forma cortísima        4
edad--; // forma cortísima        3


console.log(edad);


