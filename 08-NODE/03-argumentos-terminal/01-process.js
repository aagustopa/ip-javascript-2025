// console.log(process.argv);

//* A partir del tercer argumento, esos son los qu me pasa el usuario
const [, , flag, pokemon] = process.argv;

if (flag !== '-p' && flag !== '--pokemon') {
  console.log(
    '❌ Debes indicar la opción "-p" o "--pokemon" para buscar un pokemon'
  );
  //! Para decirle a node SAL DEL PROCESO
  process.exit(1);
}

const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
const pokemonData = await resp.json();

console.log(pokemonData.id);
