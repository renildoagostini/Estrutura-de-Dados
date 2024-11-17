const letras  = ["A", "B", "C", "D"]; //Declara e define o conteudo inicial do vetor
const letras2 = letras.slice(-2); //Obtém as duas últimas letras
console.log(letras);
console.log(letras2);

const letras3 = letras.slice(0, -1); //Obtém do inicio até o final, exceto a última
console.log(letras3);

const retira = letras.splice(2, 1); //remove a partir da posição 2, 1 elemento

console.log(letras);
console.log(retira);