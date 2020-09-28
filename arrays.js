const values = [7.7, 2, 4, 3, 9];
//console.log(values[8]); // undefined pois o valor não existe nesse array

values[8] = 'hello'; // adiciona um elemento na posição desejada do array
console.log(values);
console.log(values.length); // informa o número de caracteres

values.push({id:3}, false, null, 'teste'); 
console.log(values);
 
console.log(values.pop()); // ele pega o último valor do array e printa

delete values[0];