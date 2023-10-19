let str = prompt ("Dime una cadena");
function countLetters(str){
    str = str.toLowerCase();
    let contador=0;
    let letras = {};
    
    for(let a=0; a<str.length;a++){
        let letra=str[a];
        if (!letras[letra]){
            letras[letra]=1;
        }else{
            letras[letra]++;
        }

    }
    return letras;
}
console.log(countLetters(str));