//? switch 👉 Es otra estructura que se usa en lugar de un if...else if ...else

//! Solo usamos cuando las condiciones son finitas, es decir solo tengo un número concreto de posibilidades


const diaSemana = 'fd.ñkgidgrj';

if (diaSemana === 'lunes') {
  console.log('Hoy hay pescado');
} else if (diaSemana === 'martes') {
  console.log('Hoy hay carne'); 
} else if (diaSemana === 'miercoles' || diaSemana === 'miércoles') {
  console.log('Hoy hay sopa'); 
} else if (diaSemana === 'jueves') {
  console.log('Hoy hay paella'); 
} else if (diaSemana === 'viernes') {
  console.log('Hoy hay pasta'); 
} else if (diaSemana === 'sabado' || diaSemana === 'sábado') {
  console.log('Hoy hay pizza'); 
} else if (diaSemana === 'domingo') {
  console.log('Hoy hay hamburguesa');
} else {
  console.log('Día inválido');
}



switch (diaSemana.toLowerCase()) {

  case 'lunes': {
    console.log('Hoy hay pescado');
    break;
  }
  case 'martes': {
    console.log('Hoy hay carne'); 
    break;
  }
  case 'miércoles':
  case 'miercoles': {
    console.log('Hoy hay sopa'); 
    break;
  } 
  case 'jueves': {
    console.log('Hoy hay paella'); 
    break;
  } 
  case 'viernes': {
    console.log('Hoy hay pasta'); 
    break;
  } 
  case 'sábado':
  case 'sabado': {
    console.log('Hoy hay pizza'); 
    break;
  } 
  case 'domingo': {
    console.log('Hoy hay hamburguesa');
    break;
  }
  default: {
    console.log('Día incorrecto');
  }
}


const edad = 12;

if (edad <= 6 || edad >= 65) {
  console.log('Entras gratis');
} else if (edad >= 7 && edad <= 14) {
  console.log('Pagas 4€');
} else {
  console.log('Pagas 7€');
} 



//! En ese caso NO FUNCIONA EL SWITCH
// switch (edad) {
//   case <= 6
// }