
document.querySelector('#campoTexto').addEventListener('input', function() {
    // Obtiene el valor del campo de texto
    const texto = this.value;
    // Invierte el texto
    const textoInvertido = texto.split('').reverse().join('');
    // Actualiza el contenido del span con el texto invertido
    document.querySelector('#textoInvertido').textContent = textoInvertido;
});
