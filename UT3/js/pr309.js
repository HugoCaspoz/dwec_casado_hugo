let str = prompt ("Dime una cadena");
function removeVowels(str){
    let noVocales="";
    str = str.toLowerCase();
    let vocales = ['a' , 'e', 'i', 'o' ,'u'];
    
    for(let a=0; a<str.length;a++){
        if (!(vocales.includes(str[a]))){
            noVocales+=str[a];
        }

    }
    return noVocales;
}
alert(removeVowels(str));