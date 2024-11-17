
let pacientes = []; // Declara um vetor global

let adicionarPaciente = ()=> {
    // Obtém o valor do campo de entrada de paciente
    let nome = document.getElementById("inPaciente").value;

    // Verifica preenchimento do nome do paciente
    if (nome == "") {
        alert("Informe o nome do paciente");
        document.getElementById("inPaciente").focus();
        return;
    }

    pacientes.push(nome); // Adiciona o nome no final do vetor

    let lista = ""; // String para concatenar pacientes

    // Percorre os elementos do vetor
    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]}\n`;
    }

    // Altera o conteúdo da tag outLista
    document.getElementById("outLista").textContent = lista;

    // Limpa o campo e posiciona o cursor em inPaciente
    document.getElementById("inPaciente").value = "";
    document.getElementById("inPaciente").focus();
}

// Cria referência ao btAdicionar e associa a função ao evento click
document.getElementById("btAdicionar").addEventListener("click", adicionarPaciente);

let adicionarUrgencia = ()=> {
    // Obtém o valor do campo de entrada de paciente
    let nome = document.getElementById("inPaciente").value;

    // Verifica preenchimento do nome do paciente
    if (nome == "") {
        alert("Informe o nome do paciente");
        document.getElementById("inPaciente").focus();
        return;
    }

    pacientes.unshift(nome); // Adiciona o nome no final do vetor

    let lista = ""; // String para concatenar pacientes

    // Percorre os elementos do vetor
    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]}\n`;
    }

    // Altera o conteúdo da tag outLista
    document.getElementById("outLista").textContent = lista;

    // Limpa o campo e posiciona o cursor em inPaciente
    document.getElementById("inPaciente").value = "";
    document.getElementById("inPaciente").focus();
}

//Cria referência ao btAdicionar e associa a função ao evento 
document.getElementById("btUrgencia").addEventListener("click", adicionarUrgencia);

let atenderPaciente = () => {
    //Verifica se o vetor está vazio
    if(pacientes.length == 0){
        alert("Não há pacientes na lista de espera");
        document.getElementById("inPaciente").focus();
        return;
    }

        //Remove paciente do inicio da lista (e obtém o nome)
    let atender = pacientes.shift();

    //Exibe o nome do paciente em atendimento
    document.getElementById("outAtendimento").textContent = atender;

    //string para concaternar pacientes
    let lista = "";

    //percorre os elementos do vetor
    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]}\n`;
    }

    //altera o conteudo da tag lista
    document.getElementById("outLista").textContent = lista;

}

// Cria referência ao btAdicionar e associa a função ao evento click
document.getElementById("btAtender").addEventListener("click", atenderPaciente);
