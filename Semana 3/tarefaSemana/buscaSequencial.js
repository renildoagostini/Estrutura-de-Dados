function buscaSequencial(vetor, buscado){
    var encontrado = false;
    var posicao;
    var comparacoes = 0; // Variável para contar o número de comparações

    for(var i = 0; i < vetor.length; i++){
        comparacoes++; // Incrementa a contagem de comparações a cada iteração
        if(vetor[i] === buscado){
            encontrado = true;
            posicao = i;
            break;
        }
    }
    if(encontrado === true){
        alert(`O número ${buscado} foi encontrado na posição ${posicao} após ${comparacoes} comparações.`);
    }else{
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
