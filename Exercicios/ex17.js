function Planoaumento(plano,salario){
    switch(plano){
        case 'A': case 'a':
            aumento = (salario * 10)/100
            salarioAumentado = salario + aumento
            return {
                'Aumento: ': aumento,
                'Salario após aumento: ': salarioAumentado
            }
        case 'B': case 'b':
            aumento = (salario * 15)/100
            salarioAumentado = salario + aumento
            return {
                'Aumento: ': aumento,
                'Salario após aumento: ': salarioAumentado
            }
        case 'C': case 'c':
            aumento = (salario * 20)/100
            salarioAumentado = salario + aumento
            return {
                'Aumento: ': aumento,
                'Salario após aumento: ': salarioAumentado
            }
        default:
            return 'Plano invalido'
    }
}

console.log(Planoaumento('A',1500))
console.log(Planoaumento('a',1900))
console.log(Planoaumento('b',2500))
console.log(Planoaumento('C',1500))
console.log(Planoaumento('d',1500))
