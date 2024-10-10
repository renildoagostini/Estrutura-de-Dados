function mesclarFilas(fila1, fila2) {
  let fila3 = [];
  
  // Continuar enquanto houver elementos nas duas filas
  const mesclar = () => {
  if (fila1.length && fila2.length) {
  // Comparar o primeiro elemento de cada fila e adicionar o menor à fila3
  if (fila1[0] < fila2[0]) {
  fila3.push(fila1.shift());
  } else {
  fila3.push(fila2.shift());
  }
  mesclar(); // Chamada recursiva
  }
  };
  
  // Fazer a fusão inicial
  mesclar();
  
  // Adicionar os elementos restantes de fila1 ou fila2, se houver
  fila3 = [...fila3, ...fila1, ...fila2];
  
  return fila3;
  }
  
  // Teste do exemplo fornecido
  let fila1 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  let fila2 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  
  let fila3 = mesclarFilas(fila1, fila2);
  
  console.log(fila3);
