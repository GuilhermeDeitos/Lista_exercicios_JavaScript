function concessionaria(carro){
    switch(carro){
        case 'hatch':
            return 'Compra efetuada com sucesso'
            break
        case 'motocicletas': case 'caminhonetes': case 'sedans':
            return 'Tem certeza que não prefere este modelo?'
            break
        default:
            return 'Não trabalhamos com esse tipo de automóvel aqui'
    }
}

console.log(concessionaria('hatch'))
console.log(concessionaria('motocicletas'))
console.log(concessionaria('triciculo'))