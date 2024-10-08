export const candidatos = [];

// Función para agregar un nuevo candidato
export function agregarCandidato(nombre, color) {
    const candidato = { nombre, color, votos: 0 };
    candidatos.push(candidato);
}

// Función para eliminar un candidato por su índice
export function eliminarCandidato(index) {
    candidatos.splice(index, 1);
}

// Función para obtener la lista de candidatos actuales
export function obtenerCandidatos() {
    return candidatos;
}
