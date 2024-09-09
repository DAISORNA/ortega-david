export function contarCaracteres(cadena) {
    const contador = {};
    
    for (let char of cadena) {
        contador[char] = (contador[char] || 0) + 1;
    }
    
    return contador;
}
