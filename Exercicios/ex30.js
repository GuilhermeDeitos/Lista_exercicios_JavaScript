vet = [8, 9, 10, 11, 12, 13,15,19,20,29,30,1,85,23]
let maior = 0
let menor = vet[0]
for(let i = 0; i < vet.length;i++){
    if(vet[i] > maior){
        maior = vet[i]
    } else if(vet[i] < menor){
        menor = vet[i]
    }
}

console.log(`Maior: ${maior} | Menor:${menor}`)