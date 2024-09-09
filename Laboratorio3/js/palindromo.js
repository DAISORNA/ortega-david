export function esPalindromoDobleBase(numero) {
    const base10 = numero.toString();
    const base2 = Number(numero).toString(2);
    
    const esPalindromo = (str) => str === str.split('').reverse().join('');
    
    return esPalindromo(base10) && esPalindromo(base2);
}
