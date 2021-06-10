vet = [-1,2,45,7,-9,8,0]
let cont = 0
for(let i = 0; i < vet.length;i++){
    if(vet[i] < 0){
        cont++
    }
}
console.log(`Há ${cont} numeros negativos no vetor`)