import { esPalindromoDobleBase } from './palindromo.js';
import { contarCaracteres } from './contarCaracteres.js';
import { esBisiesto } from './bisiesto.js';
import { sumaPrimos } from './sumaPrimos.js';

document.getElementById('palindromoBtn').addEventListener('click', () => {
    const numero = document.getElementById('palindromoInput').value;
    alert(esPalindromoDobleBase(numero) ? 'Es palíndromo en ambas bases' : 'No es palíndromo en ambas bases');
});

document.getElementById('contarBtn').addEventListener('click', () => {
    const cadena = document.getElementById('contarInput').value;
    console.log(contarCaracteres(cadena));
});

document.getElementById('bisiestoBtn').addEventListener('click', () => {
    const anio = document.getElementById('bisiestoInput').value;
    alert(esBisiesto(anio) ? 'Es bisiesto' : 'No es bisiesto');
});

document.getElementById('primosBtn').addEventListener('click', () => {
    const n = document.getElementById('primosInput').value;
    alert(`La suma de los primos menores a ${n} es: ${sumaPrimos(n)}`);
});

