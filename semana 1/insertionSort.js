function insertionSort(vetor){
    for(let i = 1; i < vetor.length; i++){
      let j = i;
      while(j > 0 && vetor[j] < vetor[j-1]){
        let aux = vetor[j];
        vetor[j] = vetor[j-1];
        vetor[j-1] = aux;
        j--;
      }
    }
  }
  
  vetor = [10,9,8,7,6,5,4,3,2,1];
  insertionSort(vetor);
  console.log(vetor);