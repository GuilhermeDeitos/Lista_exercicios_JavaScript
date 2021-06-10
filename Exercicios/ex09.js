function aprovado(nota){
    if(arredondar(nota) < 40){
        return 'Reprovado'
    } else {
        return 'Aprovado'
    }
}

function arredondar(nota){
    if(nota % 5 > 2){
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

console.log(aprovado(37))