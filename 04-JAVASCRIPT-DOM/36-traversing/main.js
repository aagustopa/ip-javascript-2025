//? Traversing 👉 No es nada más que viajar entre nodos del DOM
// De padres a hijos
// De hijos a padres
// De hermanos a hermanos

const $lista1 = document.querySelector('.lista-1');

//* De padres a hijos

$lista1.firstElementChild.classList.add('text-red'); // Primer hijo

$lista1.lastElementChild.classList.add('text-red'); // Último hijo

$lista1.children[2].style.backgroundColor = 'blue'; // Hijos en una posición

//* De hijo a padre

const $hijo = document.querySelector('.hijo');

$hijo.parentElement.style.backgroundColor = 'salmon'; // Padre

//* De hermano a hermano

$lista1.previousElementSibling.classList.add('text-red'); // Hermano anterior

$lista1.nextElementSibling.style.padding = '1rem'; // Hermano siguiente
