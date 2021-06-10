function multiplicaVet(vet,num){
    for(let i = 0;i < vet.length;i++){
        vet[i] = num * vet[i]
    }
    return vet
}

function multiplicaVetForeach(vet,num){
    let resultVet = []
    vet.forEach(element => {
        resultVet.push(element * num) 
    });

    return resultVet
}

console.log(multiplicaVet([1,2,3,4,5],2))
console.log(multiplicaVetForeach([1,2,3,4,5],2))