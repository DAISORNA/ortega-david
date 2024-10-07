import { obtenerPorcentajes } from './puntuaciones.js';

export function renderGrafico() {
    const grafico = document.getElementById('grafico');
    grafico.innerHTML = '';  

    const porcentajes = obtenerPorcentajes();
    porcentajes.forEach(candidato => {
        const barra = document.createElement('div');
        barra.className = 'bar';
        barra.style.width = `${candidato.porcentaje}%`;
        barra.style.backgroundColor = candidato.color;
        barra.textContent = `${candidato.nombre}: ${candidato.porcentaje}%`;
        grafico.appendChild(barra);
    });
}
