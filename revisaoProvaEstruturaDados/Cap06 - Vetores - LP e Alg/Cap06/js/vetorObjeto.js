let carros = [];
carros.push({modelo: "Fusca", preco: 6500});
carros.push({modelo: "Escort", preco: 7800});

//for(let i = 0; i < carros.length; i++){
   //console.log(carros[i].modelo + "- R$ " + carros[i].preco);
//} funciona

//nova nomenclatura
for(const carro of carros){
    console.log(carro.modelo + "- R$ " + carro.preco);
}