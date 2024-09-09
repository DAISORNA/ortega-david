export function contarCaracteres(cadena) {
    const contador = {};

    for (let char of cadena) {
        char = char.toUpperCase(); // Normalizamos a mayúsculas
        contador[char] = (contador[char] || 0) + 1;
    }

    // Formateamos el resultado como Ejemplo"4 A, 5 Y, 1 C"
    let resultado = [];
    for (let char in contador) {
        resultado.push(`${contador[char]} ${char}`);
    }

    return resultado.join(', ');
}
