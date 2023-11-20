function max(arr) {
    let maxVal = arr.reduce((acum, item) => {
        if (item > acc) {
            return item;
          } else {
            return acum;
          }
    }, arr[0]); 
  
    return maxVal;
  }
  
  const numeros = [3, 7, 1, 9, 4, 2];
  const valorMaximo = max(numeros);
  alert("El valor máximo en el array es: " + valorMaximo);