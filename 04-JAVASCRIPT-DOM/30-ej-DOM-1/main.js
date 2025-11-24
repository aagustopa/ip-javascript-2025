
// Creo el boton
const $newH1 = document.createElement('h1');
// Le pongo contenido
$newH1.innerText = 'Hola qué ase!';

$newH1.title = 'Soy un título';

console.log($newH1.getAttribute('title'));
$newH1.setAttribute('title', 'Soy un título');


// Lo meto en el DOM dentro de body al principio
// const body = document.querySelector('body');
// body.prepend(newH1);

// También podemos acceder a body, directamente usando document.body
// document.body.prepend($newH1);




const $newButton = document.createElement('button');
$newButton.innerText = 'Haz click aquí';
// $newButton.className = 'rounded';
$newButton.classList.add('rounded');

$newButton.style.color = 'white';
$newButton.style.backgroundColor = 'tomato';

$newButton.setAttribute('data-id', '12345');

//! No hace falta cazar el h1 otra vez, porque lo HEMOS CREADO NOSOTROS MÁS ARRIBA

// $newH1.after($newButton);

// También podríamos haber creado los dos elementos y luego meterlos seguidos en el dom
document.body.prepend($newH1, $newButton);



