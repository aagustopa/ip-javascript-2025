function askAndCheckNumber(message = 'Dame un numero') {
    let num = prompt(message);
    while (num === null || isNaN(num) === true) {
        num = prompt('Mal, tiene que ser un numero');
    }
    num = Number(num)
    return num;
}

function askAndCheckText(message = 'Dame un numero') {
    let text = prompt(message);
    while (text === null || isNaN(text) === false) {
        text = prompt('Mal, tiene que ser un texto');
    }
    return text;
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}