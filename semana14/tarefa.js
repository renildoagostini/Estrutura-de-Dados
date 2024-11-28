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

var palavra1 = ["amor", "love", "liebe", "amour"];
var palavra2 = ["felicidade", "happiness", "glück", "bonheur"];
var palavra3 = ["paz", "peace", "frieden", "paix"];
var palavra4 = ["amigo", "friend", "freund", "ami"];
var palavra5 = ["casa", "house", "haus", "maison"];
var palavra6 = ["trabalho", "work", "arbeit", "travail"];
var palavra7 = ["livro", "book", "buch", "livre"];
var palavra8 = ["sol", "sun", "sonne", "soleil"];
var palavra9 = ["luz", "light", "licht", "lumière"];
var palavra10 = ["vida", "life", "leben", "vie"];

// Inserindo palavras na tabela
tabela.inserir("amor", palavra1);
tabela.inserir("felicidade", palavra2);
tabela.inserir("paz", palavra3);
tabela.inserir("amigo", palavra4);
tabela.inserir("casa", palavra5);
tabela.inserir("trabalho", palavra6);
tabela.inserir("livro", palavra7);
tabela.inserir("sol", palavra8);
tabela.inserir("luz", palavra9);
tabela.inserir("vida", palavra10);

// Testando obtenção

console.log(tabela.obter("amor"));       
console.log(tabela.obter("trabalho"));

//testando exclusão

console.log(tabela.excluir("amor"));

//Verificando se o vetor "amor" foi excluida, caso sim retornará undenifed
console.log(tabela.obter("amor")); 

