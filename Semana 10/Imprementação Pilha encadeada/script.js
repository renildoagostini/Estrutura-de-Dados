//Criando os nós individuais
class no {
    constructor(valor) {
        this.valor = valor;
        this.anterior = null;
    }
}

//definição da pilha
class pilha {
    constructor() {
        this.topo = null;
        this.tamanho = 0;
    }

    //Criando a função empilhar
    empilhar(valor) {
        let novoNo = new no(valor);
        novoNo.anterior = this.topo;
        this.topo = novoNo;
        this.tamanho++;
    }

    //Funçao Desempilhar
    desempilhar() {
        if (this.tamanho === 0) {
            return null;
        }
        let valorDesempilhado = this.topo.valor;
        this.topo = this.topo.anterior;
        this.tamanho--;
        return valorDesempilhado;
    }

    //Função mostrar topo
    topoDaPilha() {
        if (this.tamanho === 0) {
            return null;
        }
        return this.topo.valor;
    }

    //Função que verifica se a pilha está vazia
    estaVazia() {
        return this.tamanho === 0;
    }

    //Função que retorna o tamanho da pilha
    tamanhoDaPilha(){
        return this.tamanho;
    }
}

var Pilha01 = new pilha();
Pilha01.empilhar("Lusíadas");
Pilha01.empilhar("Harry Pottter");
Pilha01.empilhar("O Senhor dos Anéis");
Pilha01.empilhar("Como Fazer Amigos e Influenciar Pessoas");

console.log("****************LIVROS**************");
console.log("Topo da Pilha: " + Pilha01.topoDaPilha());
console.log("Elemento desempilhado: " + Pilha01.desempilhar());
console.log("Novo topo da pilha: " + Pilha01.topoDaPilha());
console.log("Verificando se a pilha está vazia: " + Pilha01.estaVazia());
console.log("Tamanho da pilha: " + Pilha01.tamanhoDaPilha());

console.log("*****************VEÍCULOS**************");

var Pilha02 = new pilha();
Pilha02.empilhar("Fusca");
Pilha02.empilhar("Etios");
Pilha02.empilhar("Camaro");


console.log("Topo da Pilha: " + Pilha02.topoDaPilha());
console.log("Elemento desempilhado: " + Pilha02.desempilhar());
console.log("Novo topo da pilha: " + Pilha02.topoDaPilha());
console.log("Verificando se a pilha está vazia: " + Pilha02.estaVazia());
console.log("Tamanho da pilha: " + Pilha02.tamanhoDaPilha());
