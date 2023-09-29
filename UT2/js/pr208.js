let ano = Number(prompt("Dime tu año de nacimiento"));

if(ano>1994 && ano<2010){
    console.log("Generación Z");
}else if(ano>1981 && ano<1993){
    console.log("Generación Millenial");
}else if(ano>1969 && ano<1980){
    console.log("Generación X");
}else if(ano>1949 && ano<1968){
    console.log("Baby Boomer");
}else{
    console.log("El año introducido es anterior o posterior a nuestros parámetros");
}