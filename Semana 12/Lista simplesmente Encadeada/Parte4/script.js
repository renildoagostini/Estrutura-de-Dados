//Classe que cria um nó
class No{
    constructor(elemento){
      this.elemento = elemento;
      this.proximo = null;
    }
  }
  
  //Classe que cria uma lista e suas funções
  class ListaEncadeada{
    constructor(){
      this.cabeca = null;
      this.tamanho = 0;
    }
  //[10, 1, 2, 20, 3, 4, 5, 6]
  
    //INSERIR
    //Inserindo no fim (como o push)
    adicionar1(elemento){
      const novoNo = new No(elemento);
  
      if(this.cabeca === null){
        this.cabeca = novoNo;
      }
      else{
        let atual = this.cabeca;
  
        while(atual.proximo !== null){
          atual = atual.proximo;
        }
        atual.proximo = novoNo;
      }
      this.tamanho++;
    }
  
    adicionar(posicao, elemento){
      if(posicao >=0 && posicao <= this.tamanho){
        const novoNo = new No(elemento);
  
        if(posicao === 0){
          novoNo.proximo = this.cabeca;
          this.cabeca = novoNo;
        } else {
          let atual = this.cabeca;
          let anterior = null;
          let indice = 0;
  
          while(indice < posicao){
            anterior = atual;
            atual = atual.proximo;
            indice++;
          }
          novoNo.proximo = atual;
          anterior.proximo = novoNo;
        }
        this.tamanho++;
        return true;
      } 
      return false;
    }
  
    //Remoção de um elemento específico
    //[1, 2, 3, 4, 5]
    //[1, 2, 4, 5]
    remover(elemento){
      let atual = this.cabeca;
      let anterior = null;
  
      while(atual!==null){
        if(atual.elemento === elemento){
          if(anterior === null){
            this.cabeca = atual.proximo;
          } else {
            anterior.proximo = atual.proximo;
          }
          this.tamanho--;
          return true;
        }
        anterior = atual;
        atual = atual.proximo;
      }
      return false;
    }
  
    indexOf(elemento){
      let atual = this.cabeca;
      let indice = 0;
  
      while(atual !== null){
        if(atual.elemento === elemento){
          return indice;
        }
        indice++;
        atual = atual.proximo;
      }
      return -1;
    }
  
    sizeOf(){
      return this.tamanho;
    }
  
    isEmpty(){
      return this.tamanho === 0;
    }
  
    toString(){
      let atual = this.cabeca;
      let resultado = "";
  
      while(atual !== null){
        resultado +=atual.elemento + " - ";
        atual = atual.proximo;
      }
      return resultado;
    } 
  }
  
  //TESTANDO AS FUNÇÕES
  var lista = new ListaEncadeada();
  
  //adicionando elementos
  lista.adicionar1(10);
  lista.adicionar1(20);
  lista.adicionar1(30);
  lista.adicionar1(40);
  
  console.log(lista.toString());
  
  lista.adicionar(1, 99);
  
  console.log(lista.toString());
  
  lista.remover(30);
  
  console.log(lista.toString());
  var lista2 = new ListaEncadeada();
  console.log(lista.isEmpty());
  console.log(lista.indexOf(99));