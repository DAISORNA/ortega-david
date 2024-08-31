// 1. Responder ¿Qué es Javascript y en qué se asemeja a Java?
document.getElementById("respuesta1").textContent = "JavaScript es un lenguaje de programación interpretado, utilizado principalmente para crear contenido dinámico en sitios web. Aunque comparte algunas similitudes con Java, como una sintaxis basada en C, son lenguajes distintos con diferentes propósitos y entornos de ejecución.";

// 2. Declarar dos variables con la palabra reservada "var" y realizar operaciones aritméticas
var a = 10;
var b = 5;
console.log("Suma: " + (a + b));
console.log("Resta: " + (a - b));
console.log("Multiplicación: " + (a * b));
console.log("División: " + (a / b));

// 3. Declarar dos variables con la palabra reservada "let" y concatenarlas
let nombre = "Carlos";
let apellido = "Gómez";
document.getElementById("concatenacion").textContent = "Concatenación: " + nombre + " " + apellido;

// 4. Declarar dos variables con la palabra reservada "const" e imprimir su tipo de dato
const numero = 42;
const texto = "Hola Mundo";
document.getElementById("tipoConst1").textContent = "El tipo de dato de la variable 'numero' es: " + typeof numero;
document.getElementById("tipoConst2").textContent = "El tipo de dato de la variable 'texto' es: " + typeof texto;

// 5. Declarar una variable tipo Objeto con 4 llaves
const miObjeto = {
    numero: 7,
    texto: "Hola",
    booleano: true,
    objetoVacio: {}
};
console.log(miObjeto);

// 6. Función que suma todos los múltiplos de 3 o 5 menores que un número dado
function sumaMultiplos(num) {
    let suma = 0;
    for (let i = 1; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            suma += i;
        }
    }
    return suma;
}

console.log("Suma de múltiplos de 3 o 5 menores que 10: " + sumaMultiplos(10));
