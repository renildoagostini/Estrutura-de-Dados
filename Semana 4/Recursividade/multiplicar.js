function multiplicar(n1, n2){
    //Multiplicação por 0 é igual a 0
    if(n1 == 0 || n2 == 0){
        return 0;
    }
    //caso base, onde a recursão para
    else if(n2 == 1){
        return n1;
    }
    //multiplicação através da soma com recursividade
    else{
        return (n1 + multiplicar(n1, n2 - 1));
    }
}

var resultado = multiplicar(5,4);
console.log(resultado);