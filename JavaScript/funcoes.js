// Funcões

//Definição da função

function saudacao() {
    console.log("Olá seja bem vindo ao curso de JavaScript By Santander.");
}

console.clear


// Chamando a mesma.

saudacao()

// Como enviar parâmetros para as funções?
function saudacao(nome, curso) {
    console.log(`Olá, ${nome} seja bem vindo ao curso de ${curso}.`);
}
saudacao('Jaélson', 'JavaScript By Santander')

// Retorno da nossa função:

function soma(numero1, numero2){
    return numero1 + numero2
    //nunca coloque nada após o retorno.
}
function subtracao(numero1, numero2) {
    return numero2 - numero1
}

let resultado = soma(10,20)
let resultado2 = subtracao(10,20)
console.log(resultado);
console.log(resultado2);

let numero = 52
function maiorQue50(numero) {
    if (numero > 50) {
        return console.log(00009);
    }
    return
}
