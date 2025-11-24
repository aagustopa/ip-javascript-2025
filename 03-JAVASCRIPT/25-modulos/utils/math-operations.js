export function add (a, b) {
  return a + b;
}

export function substract (a, b) {
  return a - b;
}

export function multiply (a, b) {
  return a * b;
}

export function divide (a, b) {
  return Number((a / b).toFixed(2));
}

export default function module (num, moduleNum) {
  return num % moduleNum;
}



// export { add, substract, multiply, divide };
// export default module;

