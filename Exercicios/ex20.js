
function sacar(valor){
    let cont100 = 0
    let cont50 = 0
    let cont20 = 0
    let cont10 = 0
    let cont5 = 0
    let cont1 = 0
    let notas = valorNota(valor)
    while(valor >= notas){
        switch(notas){
            case 100: 
                valor -= 100
                ++cont100
                break
            case 50:
                valor -= 50
                ++cont50
                break
            case 20:
                valor -= 20
                ++cont20
                break
            case 10: 
                valor -= 10
                ++cont10
                break
            case 5:
                valor -= 5
                ++cont5
                break
            case 1:
                ++cont1
                valor -= 1
                break
        }
        notas = valorNota(valor)
    }
    return contarNotas(cont100,cont50,cont20,cont10,cont5,cont1)
}
function valorNota(valor){
    if(valor >= 100)
        return 100
    else if(valor >= 50)
        return 50
    else if(valor >= 20)
        return 20
    else if(valor >= 10)
        return 10
    else if(valor >= 5)
        return 5
    else if(valor >= 1)
        return 1
    
}

function contarNotas(cont100,cont50,cont20,cont10,cont5,cont1){
    let result = ''
    if(cont100 > 0){
        result += `${cont100} notas de $100 `
    }
    if(cont50 > 0){
        result += `${cont50} notas de $50 `
    }
    if(cont20 > 0){
        result += `${cont20} notas de $20 `
    }
    if(cont10 > 0){
        result += `${cont10} notas de $10 `
    }
    if(cont5 > 0){
        result += `${cont5} notas de $5 `
    }
    if(cont1 > 0){
        result += `${cont1} notas de $1 `
    }
    return result
}





console.log(sacar(173))