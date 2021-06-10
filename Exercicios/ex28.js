vet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let contP = 0
let contI = 0
for (let i = 0; i < vet.length;i++){
    if(vet[i] % 2 == 0){
        contP++
    }else {
        contI++
    }
}
console.log(`Pares: ${contP} | Impares: ${contI}`)