const $btn1 = document.querySelector('.btn-1');
const $input1 = document.querySelector('.input-1');


//* Opción con función separada
// window.addEventListener('click', clickEnVentana);

// function clickEnVentana (objetoEvento) {
//   // console.log(objetoEvento);

//   //* La propiedad target del objeto del evento te va a dar qué objeto del DOM ha lanzado dicho evento
//   console.log(objetoEvento.target);
//   // console.log('Has hecho click');
// }




//* Opción con función anónima clásica
$btn1.addEventListener('click', function (evento) {

  // console.log(evento.altKey);
  // console.log('Click en el botón');

  if (evento.altKey) {
    console.log('Click con Alt');
  } else {
    console.log('Click sin alt');
  }
});



//* Opción con arrow function
$input1.addEventListener('keyup', (event) => {
  // console.log('Has escrito algo');
  // console.log(event.key);

 
  if(event.key === 'm' && event.ctrlKey) {
    console.log('Has enviado el dato');
  }
});
