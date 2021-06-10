vet = [8, 9, 10, 11, 12, 13,15,19,20,29,30]
let contIn = 0
let contOut = 0
for(let i = 0;i < vet.length; i++){
    if(vet[i] >=10 && vet[i] <= 20){
        contIn++
    } else{
        contOut++
    }
}

console.log(`Dentro do intervalo: ${contIn} | Fora do intervalo: ${contOut}`)