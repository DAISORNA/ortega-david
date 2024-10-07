import { candidatos } from './candidatos.js';

let totalVotos = 0;

export function votarCandidato(index) {
    candidatos[index].votos += 1;
    totalVotos += 1;
}

export function obtenerTotalVotos() {
    return totalVotos;
}

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
