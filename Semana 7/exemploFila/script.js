//Para cria uma lista vazia
let queue = []; // queue significa fila

//Para inserção de elementos na fila
function enqueue(element){ //enqueue significa enfileirar
    queue.push(element);  //push significa empurrar - adicionar um ou mais elementos no final da fila
}

//Para remoção de elementos da fila
function dequeue(){  //dequeue significa desenfileiramento
    return queue.shift(); //shift significa mudança - remove o primeiro elemento do array
}

//Para verificar o tamanho da fila
function size(){  //size significa tamanho
    return queue.length; //length significa comprimento
}


//Para verificar se a fila está vazia
function isEmpty(){ // isempty significa está vazia
    return queue.length  === 0;
}


enqueue(1);
enqueue(2);
enqueue(3);

console.log(queue);
console.log(dequeue());
console.log(dequeue());
console.log(dequeue());
console.log(queue);
console.log(size());
console.log(isEmpty());