const input = require('readline-sync');

// Pegar 3 notas de um aluno e imprimir a média.
const nota1 = Number(input.question("Informe a primeira nota: "));
const nota2 = Number(input.question("Informe a segunda nota: "));
const nota3 = Number(input.question("Informe a terceira nota: "));

// Acumulador
let acumulador = 0;
acumulador += 10;
acumulador = acumulador + 2;
acumulador++;
console.log(acumulador);

// Estrutura for
for (let i = 1; i <= 3; i++) {
    console.log('Repetição ', i);
}

// Resolvendo o Problema
let nota;
let soma = 0;

for (let index = 1; index <= 3; index++) {
    nota = Number(input.question(`Informe a ${index}ª nota do aluno: `));
    soma = soma + nota;
}

console.log('Soma das notas:', soma);
