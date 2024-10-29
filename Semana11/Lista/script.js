var numeros = [9, 8, 7, 6, 5, 4, 3, 2, 1];
var numeros2 = [19, 18, 17, 16, 15, 14, 13, 12, 11, 10];

//Operações de remoção

//Removendo pelo início
numeros.shift();

//Removendo pelo fim
numeros.pop();

//Removendo de uma posição específica
numeros.splice(3, 3);

//Operações de inserção

//inserção no início
numeros.unshift(10);

//inserção no final
numeros.push(0);

//inserção numa posição específica
numeros.splice(4, 0, 0, 0, 0);

//Ordenando em ordem crescente
numeros.sort();

//Juntando duas listas
var listaCompleta = numeros2.concat(numeros);

//Quebrando uma lista e gerando outra menor
var subLista = numeros.slice(2, 6);

//Descobrindo a posição de um elemento na lista
var posicao = numeros.indexOf(5);

//Removendo um elemento a partir de uma posição descoberta
numeros.splice(posicao, 1);

//Buscando um valor a partir de uma regra
var maiorQueCinco = numeros.find(
  function(numero){
    return numero > 5;
  }
);

console.log(maiorQueCinco);
