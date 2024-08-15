function SelectionsSor(vetor){
    let i, j, aux, minIndex;
    for(i = 0; i < vetor.length -1; i++){
      minIndex = i;
      for(j = i+1; j < vetor.length; j++){
        if(vetor[j] < vetor[minIndex]){
          minIndex = j;
        }
      }
      aux = vetor[minIndex];
      vetor[minIndex] = vetor[i];
      vetor[i] = aux;
    }  
  }
  
  let vetor = [10,9,8,7,6,5,4,3,2,1];
  SelectionsSor(vetor);
  console.log(vetor);