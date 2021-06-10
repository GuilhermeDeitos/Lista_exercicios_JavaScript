function lerNum(num){
    switch(num){
        case 1:
            return 'Um'
        case 2:
            return 'Dois'
        case 3:
            return 'Três'
        case 4:
            return 'Quatro'
        case 5:
            return 'Cinco'
        case 6:
            return 'Seis'
        case 7:
            return 'Sete'
        case 8:
            return 'Oito'
        case 9:
            return 'Nove'
        case 10:
            return 'Dez'
        case 0:
            return 'Zero'
        default:
            return 'Numero fora do intervalo'
    }
}


for(let i = 0; i <= 11; i++)
    console.log(lerNum(i))