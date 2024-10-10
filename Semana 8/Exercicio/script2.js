function mergeFilas(fila1, fila2) {
    let fila3 = [];
    let i = 0, j = 0;

    // Percorrer as duas filas e inserir os elementos na fila3 em ordem crescente
    while (i < fila1.length && j < fila2.length) {
        if (fila1[i] < fila2[j]) {
            fila3.push(fila1[i]);
            i++;
        } else {
            fila3.push(fila2[j]);
            j++;
        }
    }

    // Inserir os elementos restantes de fila1, se houver
    while (i < fila1.length) {
        fila3.push(fila1[i]);
        i++;
    }

    // Inserir os elementos restantes de fila2, se houver
    while (j < fila2.length) {
        fila3.push(fila2[j]);
        j++;
    }

    return fila3;
}

// Teste do exemplo fornecido
let fila1 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let fila2 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

let fila3 = mergeFilas(fila1, fila2);

console.log(fila3);
// Saída esperada: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
