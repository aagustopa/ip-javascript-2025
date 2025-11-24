import { nanoid } from 'nanoid';

const $btn1 = document.querySelector('.btn-1')

console.log('test')


const edad = 25;

if (edad > 18) {
  console.log('Eres mayor de edad');
}

$btn1.addEventListener('click', () => alert(`Este es tu nuevo ID: ${nanoid()}`))