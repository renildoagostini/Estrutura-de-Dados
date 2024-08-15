function insertionSort(vetor){
    let i, j, atual;
    for(let i = 1; i < vetor.length; i++){
      atual = vetor[i];
      j = i - 1;
      while(j >= 0 && vetor[j] > atual){
        vetor[j + 1] = vetor[j];
        j--;
      }
      vetor[j + 1] = atual;
      
    }
  }
  
  vetor = [10,9,8,7,6,5,4,3,2,1];
  insertionSort(vetor);
  console.log(vetor);