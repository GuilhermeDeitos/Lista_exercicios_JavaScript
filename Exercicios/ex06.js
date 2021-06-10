function jurosSimples(initialCapital,juros,applicationTime){
    return initialCapital * juros * applicationTime
}
function jurosCompostos(initialCapital,juros,applicationTime){
    return (initialCapital * (1 + juros)**applicationTime).toFixed(3)
}

console.log(`Juros simples: ${jurosSimples(2000,0.10,2)}\nJuros Compostos: ${jurosCompostos(2000,0.10,2)}`)