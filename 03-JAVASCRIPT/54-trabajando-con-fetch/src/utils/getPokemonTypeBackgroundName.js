export default function getPokemonTypeBackgroundName(type) {
    let backgroundClass = '';
    if (type === 'grass') {
        backgroundClass = 'bg-green-300';
    } else if (type === 'fire') {
        backgroundClass = 'bg-red-300';
    } else if (type === 'water') {
        backgroundClass = 'bg-blue-300';
    }
    return backgroundClass;
}