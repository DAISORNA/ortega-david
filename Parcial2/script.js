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
        try {
            const randomNumber = Math.floor(Math.random() * 100) + 1;

            // Verificar que el número es válido
            if (isNaN(randomNumber)) {
                throw new Error('El valor generado no es un número.');
            }

            numbers.push(randomNumber); // Agregar al arreglo
            renderNumbers(); // Actualizar la pantalla

        } catch (error) {
            console.error('Error al generar el número:', error.message);
            alert('Ha ocurrido un error al generar el número.');
        }
    }

    // Función para renderizar los números en el DOM
    function renderNumbers() {
        numberDisplay.innerHTML = ''; // Limpiar el contenedor

        // Crear los elementos para los números generados y agregarlos al contenedor
        numbers.forEach(number => {
            const numberBox = document.createElement('div');
            numberBox.className = 'number-box';
            
            // Modificación para mostrar siempre dos cifras
            numberBox.textContent = number.toString().padStart(2, '0'); // Agregar ceros a la izquierda si es necesario

            numberDisplay.appendChild(numberBox);
        });
    }

    // Función para ordenar los números en orden ascendente
    function sortAscending() {
        try {
            // Verificar si hay números para ordenar
            if (numbers.length === 0) {
                throw new Error('No hay números generados para ordenar.');
            }

            numbers.sort((a, b) => a - b); // Ordenar ascendente
            renderNumbers(); // Actualizar la pantalla

        } catch (error) {
            console.error('Error al ordenar los números en orden ascendente:', error.message);
            alert('No se puede ordenar en ascendente: ' + error.message);
        }
    }

    // Función para ordenar los números en orden descendente
    function sortDescending() {
        try {
            // Verificar si hay números para ordenar
            if (numbers.length === 0) {
                throw new Error('No hay números generados para ordenar.');
            }

            numbers.sort((a, b) => b - a); // Ordenar descendente
            renderNumbers(); // Actualizar la pantalla

        } catch (error) {
            console.error('Error al ordenar los números en orden descendente:', error.message);
            alert('No se puede ordenar en descendente: ' + error.message);
        }
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
