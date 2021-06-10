function lerCodigo(codigo,quantidade){
    switch(codigo){
        case 100:
            produto = {
                'Nome': 'Cachorro-quente',
                valor: 3 
            }
            valorFinal = quantidade * produto.valor 
            return {produto,'Quantidade': quantidade,'Valor final da compra':valorFinal}
        case 200:
            produto = {
                'Nome': 'Hambúrguer Simples',
                valor: 4 
            }
            valorFinal = quantidade * produto.valor 
            return {produto,'Quantidade': quantidade,'Valor final da compra':valorFinal}
        case 300:
            produto = {
                'Nome': 'Cheeseburguer',
                valor: 5.5 
            }
            valorFinal = quantidade * produto.valor 
            return {produto,'Quantidade': quantidade,'Valor final da compra':valorFinal}
        case 400:
            produto = {
                'Nome': 'Bauru ',
                valor: 7.5 
            }
            valorFinal = quantidade * produto.valor 
            return {produto,'Quantidade': quantidade,'Valor final da compra':valorFinal}
        case 500:
            produto = {
                'Nome': 'Refrigerante',
                valor: 3.5 
            }
            valorFinal = quantidade * produto.valor 
            return {produto,'Quantidade': quantidade,'Valor final da compra':valorFinal}
        case 600:
            produto = {
                'Nome': 'Suco',
                valor: 2.8
            }
            valorFinal = quantidade * produto.valor 
            return {produto,'Quantidade': quantidade,'Valor final da compra':valorFinal}
        default:
            return 'Codigo inválido'
    }


}
console.log(lerCodigo(100,2))
console.log(lerCodigo(200,1))
console.log(lerCodigo(300,3))
console.log(lerCodigo(400,5))
console.log(lerCodigo(500,2))
console.log(lerCodigo(600,1))
console.log(lerCodigo(700,1))