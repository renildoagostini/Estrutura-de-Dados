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

    //Inserir elementos
    adicionar(elemento){
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
        if(posicao >= 0 && posicao <= this.tamanho){
            const novoNo = new No(elemento);

            if(posicao === 0){
                novoNo.proximo = this.cabeca;
                this.cabeca = novoNo;
            }else{
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
    remover(elemento){
        let atual = this.cabeca;
        let anterior = null;

        while(atual !== null){
            if(atual.elemento === elemento){
                if(anterior === nul){
                    this.cabeca = atual.proximo;
                }else{
                    anterior.proximo = atual.proximo
                }
                this.tamanho--;
                return true;
            }
            return false;
        }
    }
}