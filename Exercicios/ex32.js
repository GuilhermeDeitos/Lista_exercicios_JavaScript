vet = [1,2,3,4,5]
let soma = 0
let media = 0
for(let i = 0; i < vet.length;i++){
    soma += vet[i]
}
media = soma/vet.length

console.log(`A media do vetor é: ${media}`)