const cidades = ["Fundão", "Santa Teresa", "Vitória"];

for(let i = 0; i < cidades.length; i++){
    console.log(cidades[i]);
}

console.log("-" .repeat(40));// Faz o ----- (40 vezes) qualquer caractere que colocar entre aspa irá repetir
console.log(cidades.toString()); //transforma o vetor em uma string e oloca uma virgula entre as palavras
console.log(cidades.join(" - ")); //Transforma o vetor em uma string e podemos indicar qualquer caracteres que irão entre as palavras

