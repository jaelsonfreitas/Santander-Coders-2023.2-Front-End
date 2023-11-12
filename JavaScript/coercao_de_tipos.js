// > Coerção de Tipos
// 1. Coerção Explícita (Manual)
const numero = 10
console.log(numero, typeof numero);
const numeroEmFormatoDeString = String(numero)
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString);

console.clear()
// 2.Coerção Implícita (Automática)
console.log('10'+ 1); // em caso de soma ele entende que tudo sao strings.
//Feito em algumas ocasiões.
