const prod1 = {}
prod1.nome = 'celular'
prod1.preco = 4998.90;
prod1['descontoLegal'] = 0.40; // Evitar atributos com espaço


console.log(prod1)

const prod2 = {
    nome: 'camisa_polo',
    preco: 79.90,
    obj:{
        blabla: 2
    }

}
console.log(prod2)
console.log(prod2.obj)