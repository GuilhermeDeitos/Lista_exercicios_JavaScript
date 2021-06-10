function typeTriangle(lado1,lado2,lado3){
    if(lado1 == lado2 && lado1 == lado3){
        return 'Equilatero'
    } else if(lado1 == lado2 && lado1 != lado3 || lado2 == lado3 && lado2 != lado1 || lado1 == lado3 && lado1 != lado2){
        return 'Isósceles'
    } else if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
        return 'Escaleno'
    }
}
console.log(typeTriangle(3,3,3))
console.log(typeTriangle(3,3,4))
console.log(typeTriangle(2,3,4))
