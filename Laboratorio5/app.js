// Obtener los elementos del DOM
const inputTexto = document.querySelector('#campoTexto'); // Captura el input de texto
const selectColor = document.querySelector('#color-select'); // Captura el select de colores
const result = document.querySelector('#result'); // Captura el contenedor del resultado

// Función para actualizar el contenido del div dinámicamente al escribir en el input
inputTexto.addEventListener('input', function() {
    // Obtiene el valor del campo de texto
    const texto = this.value;
    // Invierte el texto
    const textoInvertido = texto.split('').reverse().join('');
    // Actualiza el contenido del div con el texto invertido
    result.textContent = textoInvertido;
});

// Función para cambiar el color del contenedor basado en la opción seleccionada en el select
selectColor.addEventListener('change', function() {
    const selectedColor = selectColor.value; // Obtiene el valor del color seleccionado
    result.className = ''; // Elimina cualquier clase previa del contenedor
    result.classList.add(selectedColor); // Añade la nueva clase basada en el color seleccionado
    inputTexto.style.color = selectedColor; // Aplica el color seleccionado al texto del input
});

// Función para aplicar el color seleccionado al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const selectedColor = selectColor.value; // Obtiene el valor del color por defecto
    result.classList.add(selectedColor); // Aplica el color inicial al contenedor de resultado
    inputTexto.style.color = selectedColor; // Aplica el color inicial al input de texto
});
