//Função para empilhar elementos

var pilha = [];
var pilha2 = [];

function empilhar(vetor, elemento){
    vetor.push(elemento);
    console.log(vetor);
}

function desempilhar(vetor){
    return vetor.pop();
}

function mostraUltimo(vetor){
    let ultima = vetor.length - 1;
    return vetor[ultima];
}

function estaVazio(vetor){
    return vetor.length === 0;
}

//Empilhando 5 pratos

empilhar(pilha, "Prato 1");
empilhar(pilha, "Prato 2");
empilhar(pilha, "Prato 3");
empilhar(pilha, "Prato 4");
empilhar(pilha, "Prato 5");

//desempilhando o prato 5
//console.log("Removido: " + desempilhar(pilha));

//Testando quem está no topo
//console.log(mostraUltimo(pilha));


//Testando se apilha está vazia
//console.log(estaVazio(pilha));

//empilhando na pilha 2 os elementos removidos da pilha 1
empilhar(pilha2, desempilhar(pilha));
empilhar(pilha2, desempilhar(pilha));
empilhar(pilha2, desempilhar(pilha));
empilhar(pilha2, desempilhar(pilha));
empilhar(pilha2, desempilhar(pilha));
