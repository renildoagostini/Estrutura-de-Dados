// declara vetor de escopo global que irá conter os números já apostados
 erros = [];

// gera um número aleatório entre 1 e 100
let sorteado = Math.floor(Math.random() * 100) + 1;

// declara constante com o número de chances
const CHANCES = 6;

function apostarNumero() {
  // cria referência ao campo de entrada e obtém seu conteúdo
  let inNumero = document.getElementById("inNumero");
  let numero = Number(inNumero.value);

  // valida o número
  if (numero <= 0 || numero > 100 || isNaN(numero)) {
    alert("Informe um número válido...");
    inNumero.focus();
    return;
  }

  // referencia espaços das saídas de dados
  let outDica = document.getElementById("outDica");
  let outErros = document.getElementById("outErros");
  let outChances = document.getElementById("outChances");

  // se aposta do jogador for igual ao número sorteado
  if (numero == sorteado) {
    alert("Parabéns!! Você Acertou!!!");
    // troca status dos botões
    btApostar.disabled = true;
    btJogar.className = "exibe";
    outDica.textContent = "Parabéns!! Número sorteado: " + sorteado;
  } else {
    // se número existe no vetor erros 
    if (erros.includes(numero)) {
      alert(`Você já apostou o número ${numero}. Tente novamente`);
    } else {
      erros.push(numero);       // adiciona número ao vetor      
      let numErros = erros.length;  // obtém tamanho do vetor
      let numChances = CHANCES - numErros;   // calcula nº de chances
      // exibe nº de erros, conteúdo do vetor e nº de chances
      outErros.textContent = numErros + " (" + erros.join(", ") + ")";
      outChances.textContent = numChances;
      if (numChances == 0) {
        alert("Suas chances acabaram...");
        btApostar.disabled = true;
        btJogar.className = "exibe";
        outDica.textContent = "Game Over!! Número Sorteado: " + sorteado;
      } else {
        // usa operador ternário para mensagem da dica
        let dica = numero < sorteado ? "maior" : "menor";
        outDica.textContent = "Dica: Tente um número " + dica + " que " + numero;
      }
    }
  }
  // Limpa campo de entrada e posiciona cursor neste campo
  inNumero.value = "";
  inNumero.focus();
}
let btApostar = document.getElementById("btApostar");
btApostar.addEventListener("click", apostarNumero);

function jogarNovamente() {
  location.reload();    // recarrega a página
}
document.getElementById("btJogar").addEventListener("click", jogarNovamente);
