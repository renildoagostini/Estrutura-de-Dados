//classe que irá criar um novo nó
class No{
    constructor(valor){
        this.valor = valor;
        this.proximo = null;
    }
}

//Criar fila propriamente dita
class Fila{
    constructor(){
        this.inicio = null;
        this.fim = null;
        this.tamanho = 0;
    }
    //função que irá adicionar elementos(nós) na fila
    enfileirar(valor){
        const no = new No(valor);
        if(this.inicio === null){
            this.inicio = no;
            this.fim = no;
        }else{
            this.fim.proximo = no;
            this.fim = no;
        }
        this.tamanho++;
    }

    //Função que irá remover elementos (nós) da fila
    desenfileirar(){
        if(this.inicio === null){
            return null;
        }
            const valor = this.inicio.valor;
            this.inicio = this.inicio.proximo;
            this.tamanho--;
        
        if(this.tamanho === 0){
            this.fim = null;
        }
        return valor;
    }

    //Função exibir tamanho
    obterTamanho(){
        return this.tamanho;
    }

    //Função está vazia
    estaVazia(){
        return this.tamanho === 0;
    }

    //Função exibir começo da fila
    exibeInicio(){
        return this.inicio ? this.inicio.valor : null;
    }
}

//Testando a fila criada
const fila = new Fila();
console.log(fila.estaVazia());
fila.enfileirar("Renildo");
fila.enfileirar("Estevão");
fila.enfileirar("Ana");
fila.enfileirar("Esther");

console.log(fila.obterTamanho());
console.log(fila.estaVazia());

console.log(fila.exibeInicio());
fila.desenfileirar();

console.log(fila.exibeInicio());

