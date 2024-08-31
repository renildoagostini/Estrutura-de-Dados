function buscaBinaria(vetor, buscado){
    var inicio = 0;
    var fim = vetor.length - 1;
    var meio;
    var encontrado = false;

    while(inicio <= fim){
        meio = Math.floor((inicio + fim) / 2);
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
        //imprimir que foi encontrado e em qual posição
        alert(`O número ${buscado} foi encontrado na posição ${meio}`);
    }else{
        //imprimir que não foi encontrado o número buscado
        alert(`O número ${buscado} não foi encontrado`);
    }
}