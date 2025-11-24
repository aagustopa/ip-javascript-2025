type Genero = "masculino" | "femenino" | "no-binario";

interface Profesor {
  nombre: string;
  genero: Genero;
}

export { Profesor, Genero }