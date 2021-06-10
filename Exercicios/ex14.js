function frutaria(fruta){
    let frutaLower = fruta.toLowerCase()
    switch(frutaLower){
        case 'maçã': case 'maça':
            return 'Não vendemos essa fruta aqui'
            break
        case 'kiwi':
            return 'Estamos com escasses de kiwi'
            break
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo'
            break
        default:
            return 'ERROR 404!\nfruta invalida'
    }
}
console.log(frutaria('maça'))
console.log(frutaria('kiwi'))
console.log(frutaria('melancia'))
console.log(frutaria('laranja'))