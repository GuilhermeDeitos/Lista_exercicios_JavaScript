function bhaskara(a = 0,b = 0,c = 0){
    let delta = Math.sqrt(((-b)**2) - (4*a*c))
    if (delta < 0){
        return 'Delta negativo'
    } else{
    const result1 = (-b + delta)/2 * a
    const result2 = (-b - delta)/2 * a
    const resultados = [result1,result2]
    return resultados
    }
}

console.log('Resultados Bhaskara:',bhaskara(1,4,3))