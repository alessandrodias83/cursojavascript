/*let data = new Date();

let hora = data.getHours();
let min = data.getMinutes();
let seg = data.getSeconds();

let hora_formatada = hora + ':' + min + ':' + seg;

console.log(hora_formatada);

function imprimeHoraFormatada() {
    let data = new Date();

    let hora = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    let hora_formatada = hora + ':' + min + ':' + seg;

    console.log(hora_formatada);
}
imprimeHoraFormatada();*/

function logComHora(textoEntrada) {
    let data = new Date();

    let hora = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    let hora_formatada = hora + ':' + min + ':' + seg;

    console.log(hora_formatada, ":", textoEntrada);
}
logComHora("Um texto qualquer")

logComHora("Outro texto qualquer")