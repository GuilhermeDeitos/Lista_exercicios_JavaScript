function PA(n,a1,r){
    let an = a1+(n-1)*r
}

function PG(n,a1,r){
    return a1*r**(n-1)
}

console.log(`Progressão Aritimética: ${PA(10,10,15)} | Progressão geometrica: ${PG(10,5,3)}`)