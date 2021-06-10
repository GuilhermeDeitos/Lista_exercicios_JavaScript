function fatorial(num){
    if(num == 1){
        return num
    } else if (num > 1){
        return num * fatorial(num-1)
    } else {
        return 'ERROR 404!'
    }
}

console.log(fatorial(4))
console.log(fatorial(5))
