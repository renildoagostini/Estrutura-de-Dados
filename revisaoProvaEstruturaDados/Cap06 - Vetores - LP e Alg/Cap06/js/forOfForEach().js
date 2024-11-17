const cidades = ["Fundão", "Santa Teresa", "Vitória"];

for(const cidade of cidades){
    console.log(cidade);
}


cidades.forEach((cidade, i) => {
    console.log(`${i + 1}ª Cidade: ${cidade}`);
})

//Operações sobre vetores ficam mais simples com forEach()

const numeros = [5, 10, 15, 20];
let soma = 0;
numeros.forEach(num => soma += num);
console.log(`A soma dos números: ${soma}`);