//? Fetch 👉 El fetch es una funcion que ya viene en JavaScript y que es la primera que conocéis que devuelve una promesa
import capitalize from './utils/capitalize';
import getPokemonTypeBackgroundName from './utils/getPokemonTypeBackgroundName';



fetch('https://pokeapi.co/api/v2/pokemon')
    .then((resp) => {
        // console.log(`status ${resp.status}`);
        const pokemon = resp.json();
        return pokemon;
    })
    .then((pokemon) => {
        // console.log(pokemon.results);
        // for (let i = 0; i < pokemon.results.length; i++) {
        // console.log(pokemon.results[i])
        // }
    })
    .catch((error) => {
        // console.log(`error ${error}`);
    });

// for (let i = 0; i <= 10; i++) {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
//         .then((resp) => resp.json())
//         .then((pokemon) => {
//             const card = createPokemonBody(pokemon);
//             pokemonList.append(card);
//         })
//         .catch((error) => {
//             console.error(error);
//         })
// }


fetch('https://pokeapi.co/api/v2/pokemon/2')
    .then((resp) => {
        console.log(`status ${resp.status}`);
        const pokemon = resp.json();
        return pokemon;
    })
    .then((pokemon) => {
        console.log(pokemon);
        const name = pokemon.name;
        // GET: name, base_experience, id, abilities(array)
        createPokemonBody(name)
    })
    .catch((error) => {
        console.log(`error ${error}`);
    });

//* Lo vamos a hacer más bonito, porque si dentro de un then, retornamos una promesa, podemos encadenar los .then


fetch('https://pokeapi.co/api/v2/pokemon/charmander')
    .then((response) => response.json())
    .then((data) => document.body.append(data.name))
    .catch((error) => console.log(error));


// FUNCIONES
// CREAR POKEMON
function createPokemonBody(pokemonName) {
    // const sectionBody = document.querySelector('pokemons')
    const article = document.createElement('article');
    article.innerHtml = pokemonName;
}