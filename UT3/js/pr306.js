let str = prompt ("Dime una cadena");
let baseFrom = prompt ("Dime un numero en base en el que estamos");
let baseTo = prompt ("Dime un numero de base al que quieres pasar");

str = str.toLowerCase();
function convertBase(str, baseFrom, baseTo){
    str = parseInt(str,baseFrom);
    return str.toString(baseTo);
}
isHeterograma(str, baseFrom, baseTo);