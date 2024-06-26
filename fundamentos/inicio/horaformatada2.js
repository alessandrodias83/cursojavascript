function formatarMensagem(textoEntrada) {
    if(textoEntrada == undefined)
        return'...';

    let data = new Date();

    let hora = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    let msg_formatada = hora + ':' + min + ':' + seg;

    return msg_formatada;
}
console.log( formatarMensagem("Um texto qualquer"));

console.log( formatarMensagem());

console.log( formatarMensagem("Outro texto qualquer"));