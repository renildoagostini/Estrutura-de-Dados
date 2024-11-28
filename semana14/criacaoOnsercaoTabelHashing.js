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
}