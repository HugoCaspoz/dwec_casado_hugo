let str=prompt("Dime una cadena");

// function isIsograma(str){
//     let isograma=true
//     let letras={}
//     str=str.split('');
//     for ( let a=0;a<str.length;a++) {
//         letra=str[a]
//         if (letras[letra]){
//             letras[letra]++
//         }else{
//             letras[letra]=1;
//         }
//     }

//     for (let a=0; a<letras.length;a++){
//         if (letras[a]==1){
//             isograma=false;
//         }
//     }
//     return isograma
    
// }
// alert (isIsograma(str))

function isIsograma(str) {
    // Convertimos la cadena a minúsculas para ignorar diferencias de mayúsculas y minúsculas
    str = str.toLowerCase();
    
    // Creamos un objeto para almacenar la cantidad de veces que aparece cada letra
    let letras = {};
    
    // Iteramos a través de cada carácter en la cadena
    for (let i = 0; i < str.length; i++) {
      let letra = str[i];
      // Si la letra ya está en el objeto, aumentamos su contador en 1
      if (letras[letra]) {
        letras[letra]++;
      } else {
        // Si no está en el objeto, la inicializamos con 1
        letras[letra] = 1;
      }
    }
    
    // Verificamos si alguna letra se repite más de una vez
    for (let letra in letras) {
      if (letras[letra] !== 1) {
        return false;
      }
    }
    
    // Si ninguna letra se repite más de una vez, es un isograma
    return true;
  }
  
  // Ejemplos
  console.log(isIsograma('hhoollaa'));        // true
  console.log(isIsograma('papelera escritura'));  // true