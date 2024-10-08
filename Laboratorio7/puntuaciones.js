import { candidatos } from './candidatos.js';

let totalVotos = 0;

// Función para votar por un candidato
export function votarCandidato(index) {
    candidatos[index].votos += 1;
    totalVotos += 1;
}

// Función para obtener el total de votos
export function obtenerTotalVotos() {
    return totalVotos;
}

// Función para calcular los porcentajes de cada candidato
export function obtenerPorcentajes() {
    return candidatos.map(candidato => {
        const porcentaje = totalVotos === 0 ? 0 : (candidato.votos / totalVotos) * 100;
        return {
            nombre: candidato.nombre,
            color: candidato.color,
            porcentaje: porcentaje.toFixed(2)
        };
    });
}
