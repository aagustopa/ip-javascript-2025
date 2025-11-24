//* Si quieres, ahora en node puedes usar await sin necesidad de envolverlo en una funcion que sea async

const resp = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
const pokemon = await resp.json();
console.log(pokemon);

//! Pero ojo! porque si lo usas dentro de una función que no sea async, te va a dar error.

// async function getPokemon() {
//   const resp = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
// }

// getPokemon();
