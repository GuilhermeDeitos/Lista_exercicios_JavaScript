function converterEmDinheiro(value){
    return `R$${value.toFixed(2).toString().replace('.',',')} `
}
console.log(converterEmDinheiro(0.30000000000000004))