import { agregarCandidato, eliminarCandidato, obtenerCandidatos } from './candidatos.js';
import { votarCandidato } from './puntuaciones.js';
import { renderGrafico } from './graficos.js';

function renderTabla() {
    const tabla = document.querySelector('#tabla-candidatos tbody');
    tabla.innerHTML = '';  // Limpiamos la tabla
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

window.votar = function (index) {
    votarCandidato(index);
    renderTabla();
    renderGrafico();
};

window.eliminar = function (index) {
    eliminarCandidato(index);
    renderTabla();
    renderGrafico();
};

document.getElementById('agregar').addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    const color = document.getElementById('color').value;
    if (nombre) {
        agregarCandidato(nombre, color);
        renderTabla();
        renderGrafico();
    }
});
