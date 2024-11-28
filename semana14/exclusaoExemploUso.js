class TabelaHash {
    constructor() {
      this.tamanho = 10;
      this.tabela = new Array(this.tamanho);
    }
  
    //Função de dispersão
    hash(key) {
      //cpf: 123.456.789-10 -> 46 % 10 = 6
      var hash = 0;
      for (var i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.tamanho;
    }
  
    //Função de inserção na tabela - inserimos um par chave-valor
    inserir(key, valor) {
      var index = this.hash(key);
      if (!this.tabela[index]) {
        this.tabela[index] = [];
      }
      this.tabela[index].push({ key, valor });
    }
  
    //Obter os valores associados a uma chave
    obter(key) {
      //cpf: 123.456.789-10 -> 46 % 10 = 6
      //cpf: 123.546.798-10 -> 46 % 10 = 6
      //cpf: 321.546.798-10 -> 46 % 10 = 6 - Não foi inserido
      const index = this.hash(key);
      for (var i = 0; i < this.tabela[index].length; i++) {
        if (this.tabela[index][i].key === key) {
          return this.tabela[index][i].valor;
        }
      }
      return undefined; // Caso a chave nao seja encontrada
    }
  
    excluir(key) {
      const index = this.hash(key);
      for (var i = 0; i < this.tabela[index].length; i++) {
        if (this.tabela[index][i].key === key) {
          this.tabela[index].splice(i, 1);
          return true;
        }
      }
      return false;
    }
  }
  
  var tabela = new TabelaHash();
  tabela.inserir("12345678910", "Joao");
  tabela.inserir("12345678912", "Maria");
  tabela.inserir("12345678912", "Carlos");
  
  console.log(tabela.obter("12345678910"));
  console.log(tabela.obter("12345678912"));
  tabela.excluir("12345678912");
  console.log(tabela.obter("12345678912"));
  