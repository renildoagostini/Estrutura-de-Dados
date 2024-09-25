let vetor = ['Renildo', 'Estevão', 'Ana Carolina', 'Esther Lidiany'];

//inserir elemento no fim da fila
function inserir(vetor){
    let pessoa = document.getElementById("pessoa").value;
    vetor.push(pessoa);
}

//FIFO - First In First Out (Primeiro a entrar - Primeiro a sair)

//remover o primeiro elemento da fila e andar todos os elementos uma casa para trás
function remover(vetor){
    vetor.shift();
}

//exibir os elementos da fila
function exibir(vetor){
    var lista = document.createElement('ol');
    var container = document.getElementById("container");
    container.innerHTML = '';

    for(i = 0; i < vetor.length; i++){
        var pessoa = document.createElement('li');
        pessoa.innerText = vetor[i];
        lista.appendChild(pessoa); //appendChild significa anexar filho
    }

    container.appendChild(lista);
}
