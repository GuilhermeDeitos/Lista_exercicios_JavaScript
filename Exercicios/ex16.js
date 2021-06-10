function calculadora(num1,op,num2){
    switch(op){
        case '+':
            return num1 + num2
            break
        case '-':
            return num1 - num2
            break
        case '*':
            return num1 * num2
        case '/':
            return num1/num2
        default:
            return 'Operação invalida'
    }
}
console.log(calculadora(2,'+',3))