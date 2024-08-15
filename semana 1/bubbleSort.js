function bubbleSort(vetor){
    var i, j, aux;
    for(i = 0; i < vetor.length - 1; i++){
      for(j = 0; j < vetor.length - 1 - i; j++){
        if(vetor[j] > vetor[j + 1]){
          aux = vetor[j];
          vetor[j] = vetor[j + 1];
          vetor[j + 1] = aux;
        }
      }
    }
  }
  
  var vetor = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  bubbleSort(vetor);
  console.log(vetor);