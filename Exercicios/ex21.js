function planoDeSaude(idade){
    valorPago = 100
    if(idade < 10){
        valorPago += 80
    } else if(idade >= 10 && idade <= 30){
        valorPago += 50
    } else if(idade > 30 && idade <= 60){
        valorPago += 95
    } else if(idade >= 60){
        valorPago += 130
    }
    return valorPago
}
console.log(planoDeSaude(9))
console.log(planoDeSaude(15))
console.log(planoDeSaude(31))
console.log(planoDeSaude(79))
console.log(planoDeSaude(10))