import './styles/style.css';
import fotoPerro from  './assets/img/perro1.jpg';


console.log('Hello, world! This is a test.');

const $photoBoxFromPublic = document.querySelector('.photo-box-from-public');
const $photoBoxFromsrc = document.querySelector('.photo-box-from-src');

const newImageFromPublic = document.createElement('img');
// newImage.src = fotoGato;
newImageFromPublic.src = '/assets/img/gato1.jpg';
newImageFromPublic.width = '200';

$photoBoxFromPublic.appendChild(newImageFromPublic);



//* Añadir imagen que no está en public
const newImageFromSrc = document.createElement('img');
newImageFromSrc.src = fotoPerro;
newImageFromSrc.width = '200';

$photoBoxFromsrc.appendChild(newImageFromSrc);