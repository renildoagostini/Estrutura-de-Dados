function buscaSequencial(vetor, buscado){
    var encontrado = false;
    var posicao;   

    for(var i = 0; i < vetor.length;i++){
        if(vetor[i] === buscado){
            encontrado = true;
            posicao = i;
            break;
        }
    }
    if(encontrado === true){
        //imprimir que foi encontrado e em qual posição
        alert(`O número ${buscado} foi encontrado na posição ${posicao}`);
    }else{
        //imprimir que não foi encontrado o número buscado
        alert(`O número ${buscado} não foi encontrado`);
    }
}