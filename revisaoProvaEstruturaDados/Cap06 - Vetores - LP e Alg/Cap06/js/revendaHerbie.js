let carros = [];

let adicionarCarros = () => {

    //cria referencia aos elementos contendo os dados de entrada
    let inModelo = document.getElementById("inModelo");
    let inPreco = document.getElementById("inPreco");

    //obtém os conteúdos dos campos
    let modelo = inModelo.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
    let preco = Number(inPreco.value);

    //verifica os preenchimentos dos campos
    if (modelo == "" || preco == 0 || isNaN(preco)) {
        alert("Informe corretamente os dados");
        inModelo.focus();
        return;
    }

    //adiciona dados ao vetor
    carros.push({ modelo: modelo, preco: preco })

    //limpa os campos e posiciona o curso em inModelo
    inModelo.value = "";
    inPreco.value = "";
    inModelo.focus();


    //chama a função que lista os carros
    listarCarros()
}

document.getElementById("btAdicionar").addEventListener("click", adicionarCarros);

let listarCarros = () => {
    //verifica se o vetor está vazio
    if (carros.length == 0) {
        alert("Não há carros na lista");
        return;
    }

    //para concatenar lista de carros
    let lista = "";

    //percorre os elementos do vetor
    for (let i = 0; i < carros.length; i++) {
        //adiciona a lista cada objeto do vetor
        lista += `${carros[i].modelo} - R$ ${carros[i].preco.toFixed(2)} \n`;

    }
    //referencia elemento e altera conteúdo exibido
    document.getElementById("outLista").textContent = lista;
}

document.getElementById("btListar").addEventListener("click", listarCarros);

let filtrarCarros = () => {
    //faz a leitura do valor maximo a partir do método prompt
    let maximo = Number(prompt("qual o valor máximo que o cliente deseja pagar?"));

    //se não preencheu ou conteúdo inválido...
    if (maximo == 0 || isNaN(maximo)) {
       return;
    }

    //para concatenar lista de carros que obedecem ao critério de pesquisa/filtro
    var lista = "";

    //percorre todos os elementos do vetor
    for( let i = 0; i < carros.length; i++){
        //verifica se o preço é inferior ou igual ao máximo
        if(carros[i].preco <= maximo){
            lista += `${carros[i].modelo} -R$ ${carros[i].preco.toFixed(2)}\n`;
        }
    }

    //cria referencia a outlista
    let outLista = document.getElementById("outLista");

    //se lista estiver vazia, significa que nenhum veículo foi encontrado
    if(lista == ""){
        outLista.textContent = `Não há carros com preço de R$ ${maximo.toFixed(2)}`;
    }else{
        outLista.textContent = `Carros até R$ ${maximo.toFixed(2)} \n--------------\n ${lista}`;
    }
}

document.getElementById("btFiltrar").addEventListener("click", filtrarCarros);