function calcularAnuidade(mes,valor){
    let juros = 0
    if(mes > 0 && mes <= 12){
        atraso = mes-1
        return (valor * (1 + 5/100)**atraso).toFixed(2)
    } else{
        return 'Mês invalido'
    }
}

console.log(calcularAnuidade(3,100))