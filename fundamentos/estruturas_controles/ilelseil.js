Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResulatdo = function (nota) {
    if(nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado!')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if(nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota Inválida!')
    }

    console.log('fim')

}

imprimirResulatdo(10);
imprimirResulatdo(8.99);
imprimirResulatdo(6.55);
imprimirResulatdo(2.3);
imprimirResulatdo(-1);
imprimirResulatdo(11);


