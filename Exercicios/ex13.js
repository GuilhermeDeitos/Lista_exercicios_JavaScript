function converter(dia){
    let diaS = dia.toLowerCase()
    switch(diaS){
        case 'domingo':
            return 1
            break
        case 'segunda-feira': case 'segunda':
            return 2
            break
        case 'terça-feira': case 'terca-feira': case 'terça':
            return 3
            break
        case 'quarta-feira': case 'quarta':
            return 4
            break
        case 'quinta-feira': case 'quinta':
            return 5
            break
        case 'sexta-feira': case 'sexta':
            return 6
            break
        case 'sabado': case 'sábado':
            return 7
            break
        default:
            return 'Dia invalido'
    }
}

function diaUtil(dia){
    const diaSemana = converter(dia)
    switch(diaSemana){
        case 1: case 7:
            return 'Fim de Semana'
            break
        case 2: case 3: case 4: case 5: case 6:
            return 'Dia Útil'
            break
        default:
            return 'Dia invalido'
    }

}

console.log(diaUtil('domingo'))
console.log(diaUtil('segunda-feira'))
console.log(diaUtil('sabado'))
console.log(diaUtil('terça-feira'))
console.log(diaUtil('sábado'))
console.log(diaUtil('terça'))