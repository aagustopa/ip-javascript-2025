// export default function getPokemonTypeBackgroundName(type) {
//   let backgroundClass = '';

//   if (type === 'normal') {
//     backgroundClass = 'bg-gray-200';
//   } else if (type === 'fighting') {
//     backgroundClass = 'bg-red-200';
//   } else if (type === 'flying') {
//     backgroundClass = 'bg-blue-200';
//   } else if (type === 'poison') {
//     backgroundClass = 'bg-purple-200';
//   } else if (type === 'ground') {
//     backgroundClass = 'bg-yellow-200';
//   } else if (type === 'rock') {
//     backgroundClass = 'bg-orange-200';
//   } else if (type === 'bug') {
//     backgroundClass = 'bg-green-200';
//   } else if (type === 'ghost') {
//     backgroundClass = 'bg-indigo-200';
//   } else if (type === 'steel') {
//     backgroundClass = 'bg-gray-300';
//   } else if (type === 'fire') {
//     backgroundClass = 'bg-red-300';
//   } else if (type === 'water') {
//     backgroundClass = 'bg-blue-300';
//   } else if (type === 'grass') {
//     backgroundClass = 'bg-green-300';
//   } else if (type === 'electric') {
//     backgroundClass = 'bg-yellow-300';
//   } else if (type === 'psychic') {
//     backgroundClass = 'bg-pink-200';
//   } else if (type === 'ice') {
//     backgroundClass = 'bg-blue-100';
//   } else if (type === 'dragon') {
//     backgroundClass = 'bg-purple-300';
//   } else if (type === 'dark') {
//     backgroundClass = 'bg-gray-400';
//   } else if (type === 'fairy') {
//     backgroundClass = 'bg-pink-300';
//   } else if (type === 'stellar') {
//     backgroundClass = 'bg-indigo-400';
//   } else if (type === 'unknown') {
//     backgroundClass = 'bg-gray-500';
//   } else {
//     backgroundClass = 'bg-gray-600';
//   }

//   return backgroundClass;
// }

export default function getPokemonTypeBackgroundName(type: string) {
  const backgroundClasses: { [key: string]: string} = {
    normal: 'bg-gray-200',
    fighting: 'bg-red-200',
    flying: 'bg-blue-200',
    poison: 'bg-purple-200',
    ground: 'bg-yellow-200',
    rock: 'bg-orange-200',
    bug: 'bg-green-200',
    ghost: 'bg-indigo-200',
    steel: 'bg-gray-300',
    fire: 'bg-red-300',
    water: 'bg-blue-300',
    grass: 'bg-green-300',
    electric: 'bg-yellow-300',
    psychic: 'bg-pink-200',
    ice: 'bg-blue-100',
    dragon: 'bg-purple-300',
    dark: 'bg-gray-400',
    fairy: 'bg-pink-300',
    stellar: 'bg-indigo-400',
    unknown: 'bg-gray-500',
    default: 'bg-gray-600',
  };

  return backgroundClasses[type] || backgroundClasses.default;
}
