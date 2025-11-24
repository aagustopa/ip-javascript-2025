//* Cazamos lo que necesitamos

const $btn1 = document.getElementById('btn-1');
const $btn2 = document.querySelector('#btn-2');
const $btn3 = document.querySelector('#btn-3');



//* Escuchamos el evento que queramos de ese elemento

function changeBodyBackground () {  
  const colorRandom = Math.ceil(Math.random() * 360);  
  console.log('Fondo cambiado con el color ' + colorRandom);
  document.body.style.backgroundColor = `hsl(${colorRandom} 100% 50%)`;
}

$btn1.addEventListener('click', changeBodyBackground);


//* La función que le pasamos a addEventListener también puede necesitar parámetros


function changeTitleWithName (name = 'amig@') {
  const $h1 = document.querySelector('h1');

  $h1.innerText = 'Hola, ' + name;
}

//! Para que la función que necesita parámetros no se ejecute inmediatamente, usamos siempre una segunda función que lo único que hace es ejecutar la que nos interesa.
function segundaFuncion () {
  changeTitleWithName('Andrea');
}


$btn2.addEventListener('click', segundaFuncion);



//* Todo este proceso, normalmente lo hacemos mucho más corto




$btn3.addEventListener('click', function () {
  changeTitleWithName('Sergi');
});

//! Podemos usar arrow functions y será más cortito
$btn3.addEventListener('click', () => changeTitleWithName('Sergi'));


//****************************************************/
//****************************************************/


//? Eventos más usados

//? De mouse
//* Click es el más usado sin duda

//* mouseover 👉 Al ponerte encima de un elemento

const $fotoPerro1 = document.querySelector('.foto-perro-1');

function addOutlineToImage () {
  console.log('Encima de la imagen');
  $fotoPerro1.style.outline = '4px solid crimson';
}

$fotoPerro1.addEventListener('mouseover', addOutlineToImage);

//* mouseleave  👉  Al salir de encima del elemento
//! EN este caso vamos a ahorrarnos crear una función que tengamos que inventar un nombre y pasárselo Vamos a usar directamente una función anónima


// $fotoPerro1.addEventListener('mouseleave', function () {
//   console.log('Fuera de la imagen');
//   $fotoPerro1.style.outline = 'none';
// });

//! Aquí es donde yo usaria las arrow functions
$fotoPerro1.addEventListener('mouseleave', () => $fotoPerro1.style.outline = 'none');



//? Para un input de texto

const $inputName = document.querySelector('.input-name');

//* focus 👉 Cuando se haga foco en el input

// function underlineTitle () {
//   const $titleInputs = document.querySelector('.title-inputs');
//   $titleInputs.classList.add('underline');
// }

// $inputName.addEventListener('focus', underlineTitle);



//* blur 👉 Cuando se SALE DEL foco en el input


// $inputName.addEventListener('blur', () => {
//   const $titleInputs = document.querySelector('.title-inputs');
//   $titleInputs.classList.remove('underline');
// });


//! Podemos hacer lo mismo de poner y quitar clase SOLO CON UNA FUNCIÓN y usando classList.toggle()

function toggleUnderline () {
  const $titleInputs = document.querySelector('.title-inputs');

  //! Esto se puede hacer con una linea con classList.toggle
  // if ($titleInputs.className.includes('underline')) {
  //   $titleInputs.classList.remove('underline');
  // } else {
  //   $titleInputs.classList.add('underline');
  // }

  $titleInputs.classList.toggle('underline');
}

$inputName.addEventListener('focus', toggleUnderline);
$inputName.addEventListener('blur', toggleUnderline);

// Versión sin crear la funcion aparte


$inputName.addEventListener('focus', () => {
  const $titleInputs = document.querySelector('.title-inputs');
  $titleInputs.classList.toggle('underline');
});

$inputName.addEventListener('blur', () => {
  const $titleInputs = document.querySelector('.title-inputs');
  $titleInputs.classList.toggle('underline');
});



//? Para inputs que cambian como color, date, select


//* change 👉 se dispara cada vez que cambias un valor de un input y lo seleccionas de verdad, normlamente saliendo de la selección

const $inputColor = document.getElementById('color');
const $inputDate = document.getElementById('date');
const $inputCity = document.getElementById('city');

$inputColor.addEventListener('change', () => {
  console.log('CHANGE -> Has cambiado el color')
});
$inputDate.addEventListener('change', () => {
  console.log('Has cambiado la fecha')
});
$inputCity.addEventListener('change', () => {
  console.log('Has cambiado la ciudad')
});

//* input 👉 Se dispara MIENTRAS VAS CAMBIANDO EL VALOR


$inputColor.addEventListener('input', () => {
  console.log('INPUT -> Has cambiado el color')
});



// Diferencias con ejemplos
const $cajaColor = document.querySelector('.caja-color');

$inputColor.addEventListener('input', () => {
  

  $cajaColor.style.backgroundColor = $inputColor.value;
})


// Otro ejemplo sería con un input range

const $noteRange = document.querySelector('#note-range');
const $noteOutput = document.querySelector('.note-output');



$noteRange.addEventListener('input', () => {
  $noteOutput.innerText = $noteRange.value;
});


//? Eventos de teclado

const $inputKeys = document.querySelector('.input-keys');

//* keydown 👉 mientras pulso una tecla

$inputKeys.addEventListener('keydown', () => {
  console.log('Tecla abajo');
});

//* keyup 👉 cuando SUELTO una tecla

$inputKeys.addEventListener('keyup', () => {
  console.log('Tecla arriba');
});


//? Para la ventana

//* scroll 👉 cada vez quee se hace un poco de scroll en algun lmento


console.log(window);
const $scrollProgressBox = document.querySelector('.scroll-progress');


window.addEventListener('scroll', () => {
  const scrollRecorrido = window.scrollY;
  const contenidoGeneral = document.body.clientHeight;
  const alturaContenidoVisible = window.innerHeight;
  const porcentajeRecorrido = (scrollRecorrido / (contenidoGeneral - alturaContenidoVisible) * 100);

  console.log(porcentajeRecorrido);
  $scrollProgressBox.style.width = porcentajeRecorrido + '%';
})


/*
      RESUMEN

      click
      mouseover/mouseenter
      mouseleave

      focus
      blur

      change
      input

      keydown
      keyup


*/


















