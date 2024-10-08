// Módulo IIFE para encapsular todo el código
const NumberGeneratorModule = (function () {
    let numbers = []; // Single source of truth para los números generados

    // Selección de elementos mediante querySelector
    const generateButton = document.querySelector('#generateButton');
    const numberDisplay = document.querySelector('#numberDisplay');
    const upButton = document.querySelector('#upButton');
    const downButton = document.querySelector('#downButton');

    // Función para generar un nuevo número aleatorio
    function generateNumber() {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        numbers.push(randomNumber); // Agregar al arreglo
        renderNumbers(); // Actualizar la pantalla
    }

    // Función para renderizar los números en el DOM
    function renderNumbers() {
        numberDisplay.innerHTML = ''; // Limpiar el contenedor

        // Crear los elementos para los números generados y agregarlos al contenedor
        numbers.forEach(number => {
            const numberBox = document.createElement('div');
            numberBox.className = 'number-box';
            numberBox.textContent = number;
            numberDisplay.appendChild(numberBox);
        });
    }

    // Función para ordenar los números en orden ascendente
    function sortAscending() {
        numbers.sort((a, b) => a - b); // Ordenar ascendente
        renderNumbers(); // Actualizar la pantalla
    }

    // Función para ordenar los números en orden descendente
    function sortDescending() {
        numbers.sort((a, b) => b - a); // Ordenar descendente
        renderNumbers(); // Actualizar la pantalla
    }

    // Event listeners
    generateButton.addEventListener('click', generateNumber);
    upButton.addEventListener('click', sortAscending);
    downButton.addEventListener('click', sortDescending);

    // Retornar las funciones necesarias (opcional, para pruebas o extensiones)
    return {
        generateNumber,
        sortAscending,
        sortDescending
    };
})();

