let idades = [5, 6, 8, 3, 6, 9];

console.log(idades);

console.log(idades.indexOf(6)); //Percorre o vetor do inicio para o fim e informa o primeiro na posição que está localizado o número 6

console.log(idades.lastIndexOf(6)); //Percorre o vetor do fim para o inicio e informa o primeiro na posição que está localizado o número 6

console.log(idades.indexOf(7)); //Quando não há no vetor algum elemento ele retorna -1

console.log(idades.includes(3)); // retorna verdadeiro ou falso caso da existencia ou não de elemento no vetor