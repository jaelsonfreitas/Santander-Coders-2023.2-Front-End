// > ARRAYS

// - Como criar um array

let arr = ['Jaelson', 26, 1.77, true]

console.log(arr)

// Como acessar os elementos.
console.log('Seu nome é: ', arr[0], ' e você tem ', arr[1], ' anos uma altura de:', arr[2]);

//como obter o tamanho do array

console.log(arr.length);

// percorrendo array

for(let i = 0; i < arr.length; i++ ){
    console.log(arr[i]);
}

console.clear()

for (let elemento of arr){
    console.log(elemento);
}

console.clear()

for (let variavel in arr) {
    console.log(variavel);
}