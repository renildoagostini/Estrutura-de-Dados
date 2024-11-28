class TabelaHash{
    constructor(){
        this.tamanho = 10;
        this.tabela = new Array(this.tamanho);
    }

    //Função de dispersão
    hash(key){
        //cpf: 123.456.789-10
        var hash = 0;
        for(var i = 0; i < key.length; i++){
            hash += key.chartCodeAt(i);
        }
        return hash % this.tamanho;
    }

    //função de inserção na tabela -- inserimos um par chave-valor
    inserir(key, valor){
        var index = this.hash(key);
        if(!this.tabela[index]){
            this.tabela[index] = [];
        }
        this.tabela[index].push({key, value});
    }

    //Obter os valores associados a uma chave
    obter(key){
        const index = this.hash(key);
        for(var i = 0; i < tabela[index].length; i++){
            if(this.tabela[index][i].key === key){
                return this.tabela[index][i].value
            }
        }
        return undefined; //Caso a chave não seja encontrada
    }
}