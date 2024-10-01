let hora = document.querySelector('.hora');
function mostrarHora(lugar = 'santiago') {
    let fechaActual = new Date();
    console.log(fechaActual);
    let diferencia = 0;
    lugar.toLowerCase();
    switch (lugar) {
        case 'santiago': diferencia = 0;
            break;
        case 'paris': diferencia = 5;
            break;
        case 'londres': diferencia = 4;
            break;
        case 'nueva-york': diferencia = -1;
            break;
        case 'san-petersburgo': diferencia = 6;
            break;
        case 'beijing': diferencia = 11;
            break;
        case 'seul': diferencia = 12;
            break;
        default:
            break;
    }
    fechaActual.setHours(fechaActual.getHours() + diferencia);
    console.log(fechaActual);
    document.querySelector(`.hora-${lugar}`).innerHTML = `${fechaActual.getHours()}:${fechaActual.getMinutes()}:${fechaActual.getSeconds()}`
}
setInterval(() => {
    mostrarHora()
}, 1000);
let paris = () => {
    setInterval(() => {
        mostrarHora('paris')
    }, 1000);
}
let londres = () => {
    setInterval(() => {
        mostrarHora('londres')
    }, 1000);
}
let nuevaYork = () => {
    setInterval(() => {
        mostrarHora('nueva-york')
    }, 1000);
}
let sanPetersburgo = () => {
    setInterval(() => {
        mostrarHora('san-petersburgo')
    }, 1000);
}
let beijing = () => {
    setInterval(() => {
        mostrarHora('beijing')
    }, 1000);
}
let seul = () => {
    setInterval(() => {
        mostrarHora('seul')
    }, 1000);
}
setTimeout(paris, 4000)
setTimeout(londres, 8000)
setTimeout(nuevaYork, 12000)
setTimeout(sanPetersburgo, 16000)
setTimeout(beijing, 20000)
setTimeout(seul, 24000)