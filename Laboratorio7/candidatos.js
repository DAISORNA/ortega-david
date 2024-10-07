export const candidatos = [];

export function agregarCandidato(nombre, color) {
    const candidato = { nombre, color, votos: 0 };
    candidatos.push(candidato);
}

export function eliminarCandidato(index) {
    candidatos.splice(index, 1);
}

export function obtenerCandidatos() {
    return candidatos;
}
