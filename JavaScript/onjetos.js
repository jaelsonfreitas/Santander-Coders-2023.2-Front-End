// Objetos

// Como criar objeto.

let pessoa = {
    nome: 'Jaélson',
    idade: 33,
    altura: 1.69,
}
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.altura);

// Como adicionar um par de chave-valor?

pessoa.endereco = 'Éleodooro Marcos Teixeira, 179'
console.log(pessoa);

// Como remover uma chave?

delete pessoa.altura

console.log(pessoa);

// Como percorrer?

for (let chave in pessoa) {
    console.log(chave)
}