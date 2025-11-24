function askAndCheckNumber (message = 'Dame un número') {
  let num = prompt(message);
  while (num === null || isNaN(num) === true) {
    num = prompt('Mal, tiene que ser un número');
  }
  num = Number(num);

  return num;
}


// export { askAndCheckNumber };

export default askAndCheckNumber;