function buscaBinaria(vetor, buscado){
    var inicio = 0;
    var fim = vetor.length - 1;
    var meio;
    var encontrado = false;
    var comparacoes = 0; // Variável para contar o número de comparações

    while(inicio <= fim){
        meio = Math.floor((inicio + fim) / 2);
        comparacoes++; // Incrementa a contagem de comparações a cada iteração
        alert(meio);
        if(vetor[meio] === buscado){
            encontrado = true;
            break;
        }else if(vetor[meio] < buscado){
            inicio = meio + 1;
        }else{
            fim = meio - 1;
        }
    }

    if(encontrado === true){
        // imprimir que foi encontrado e em qual posição, além do número de comparações
        alert(`O número ${buscado} foi encontrado na posição ${meio} após ${comparacoes} comparações.`);
    }else{
        // imprimir que não foi encontrado o número buscado e o número de comparações
        alert(`O número ${buscado} não foi encontrado após ${comparacoes} comparações.`);
    }
}

// Função para criar um vetor de tamanho específico (ex: 100 posições)
function criarVetor(tamanho) {
    var vetor = [];
    for (var i = 1; i <= tamanho; i++) {
        vetor.push(i);
    }
    return vetor;
}
