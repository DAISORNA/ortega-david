import { obtenerPorcentajes } from './puntuaciones.js';

// Función para renderizar el gráfico de barras basado en los votos
export function renderGrafico() {
    const grafico = document.querySelector('#grafico');
    grafico.innerHTML = '';  // Limpiar el gráfico existente

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
