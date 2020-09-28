let valor // não inicializada
console.log(valor)

valor1 = null // ausência de valor
console.log(valor1)
//console.log(valor1.toString()) /// ERRO!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

delete(produto.preco)

produto.preco = null