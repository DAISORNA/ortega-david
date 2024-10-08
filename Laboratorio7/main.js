import { agregarCandidato, eliminarCandidato, obtenerCandidatos } from './candidatos.js';
import { votarCandidato } from './puntuaciones.js';
import { renderGrafico } from './graficos.js';

// Función para renderizar la tabla de candidatos
function renderTabla() {
    const tabla = document.querySelector('#tabla-candidatos tbody');
    tabla.innerHTML = '';  // Limpiar la tabla

    const candidatos = obtenerCandidatos();
    candidatos.forEach((candidato, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${candidato.nombre}</td>
            <td>${candidato.votos}</td>
            <td style="background-color: ${candidato.color};">${candidato.color}</td>
            <td>
                <button onclick="votar(${index})">Votar</button>
                <button onclick="eliminar(${index})">Eliminar</button>
            </td>
        `;
        tabla.appendChild(fila);
    });
}

// Función para votar por un candidato
window.votar = function (index) {
    votarCandidato(index);
    renderTabla();
    renderGrafico();
};

// Función para eliminar un candidato
window.eliminar = function (index) {
    eliminarCandidato(index);
    renderTabla();
    renderGrafico();
};

// Evento para agregar un nuevo candidato
document.querySelector('#agregar').addEventListener('click', () => {
    const nombre = document.querySelector('#nombre').value;
    const color = document.querySelector('#color').value;
    if (nombre) {
        agregarCandidato(nombre, color);
        renderTabla();
        renderGrafico();
    }
});

// Inicialización de la tabla y gráfico en la carga de la página
document.addEventListener('DOMContentLoaded', () => {
    renderTabla();
    renderGrafico();
});
