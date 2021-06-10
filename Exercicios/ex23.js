function calcularNota(idAluno,n1,n2,n3){
    media = (n1*4+n2*3+n3*3)/(4+3+3)
    if(media >= 5 && media < 11){
        return `${idAluno}, Aprovado com a média: ${media}`
    } else if(media < 5 && media >= 0){
        return `${idAluno}, Reprovado com a média: ${media}`
    } else{
        return 'Nota invalida'
    }
}

console.log(calcularNota(123,4,5,6))