var nombre = prompt("Cual es tu nombre?")
alert('Bienvenid@! '+ nombre +' queriamos comunicarte que para poder que se genere un buen codigo QR ingresa bien el LINK de la pagina!')



const contenedorQR = document.getElementById('contenedorQR')
const formulario = document.getElementById('formulario')

const QR = new QRCode(contenedorQR)

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    QR.makeCode(formulario.link.value)
})