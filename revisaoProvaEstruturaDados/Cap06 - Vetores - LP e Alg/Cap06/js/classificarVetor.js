let nomes = ["Pedro", "Ana", "João"];

nomes.sort();
console.log(nomes.join(", "));

nomes.reverse();
console.log(nomes.join(", "));

let numeros = [2, 3, 1, 7, 9, 4, 10, 5, 6, 8];

numeros.sort((a, b) => a - b);
console.log(numeros.join(", "));
