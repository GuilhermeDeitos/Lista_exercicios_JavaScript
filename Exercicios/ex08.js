let pontuacao = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function compararPontuacao(pontuacao){
    let piorjogo = 1
    let recorde = 0
    let pontos = pontuacao.split(', ')
    let menorpontuacao = pontos[0]
    let maiorpontuacao = pontos[0]
    for(let i = 1; i < pontos.length;i++){
        if(pontos[i] > maiorpontuacao){
            maiorpontuacao = pontos[i]
            recorde++
        } else if(pontos[i] < menorpontuacao){
            menorpontuacao = pontos[i]
            piorjogo = i+1
        }
    }
    return [recorde,piorjogo]
}

console.log(compararPontuacao(pontuacao))