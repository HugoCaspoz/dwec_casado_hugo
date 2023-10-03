let ano = Number(prompt("Dime tu año de nacimiento"));

if(ano>1994){
    console.log("Generación Z");
}else if(ano>1981){
    console.log("Generación Millenial");
}else if(ano>1969){
    console.log("Generación X");
}else if(ano>1949 && ano<1968){
    console.log("Baby Boomer");
}else{
    console.log("El año introducido es anterior o posterior a nuestros parámetros");
}

// let msg = 
//         ano>2010 ? "Fecha no valida":
//         ano>1994 ? "Generacion Z":
//         ano>1981 ? "X":
//         ano>1994 ? "Generación Z":
//         "Fecha no válida"   
// console.log(msg);