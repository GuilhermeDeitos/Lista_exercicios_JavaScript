function div(dividendo,divisor = 1){
    let resto = dividendo % divisor
    console.log(`Divisão entre ${dividendo} e ${divisor} = ${dividendo/divisor} e sobra de resto ${resto}`)
}

div(2,2)