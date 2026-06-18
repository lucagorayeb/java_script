/* const prompt = require('prompt-sync')();

function exibe_mensagem_para_usuario(){
    let nome = prompt("Qual o seu nome? ");
    console.log("Olá, " + nome);
}

exibe_mensagem_para_usuario(); */
/* let nome = 'Luca';
console.log(typeof nome);

let idade = 20;
console.log(typeof idade);

let vivo = true;
console.log(typeof vivo);

const pi = 3.14;
console.log(typeof pi);

console.log(9 + 3);
console.log(9 === 3);
console.log(9 !== 3);
console.log(9 === 9);
console.log(3 !== 3); */

// Strings
let string = "string";
console.log(string.length); // Tamanho da string

console.log(string.indexOf("str")); // Verifica se uma substring existe dentro da string

console.log(string.slice(0,3)); // Pegar o valor que esta entre os caracteres da string
console.log(string.slice(3)); 

console.log(string.toUpperCase()); // Converte para maiúsculo 
console.log(string.toLowerCase()); // Converte para minusculo

console.log(string.replace('ing', 'enth')); // Substitui parte da string por outra string