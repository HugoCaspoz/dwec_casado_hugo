let str = prompt ("Dime una cadena");
function countVowels(str){
    str = str.toLowerCase();
    let contador=0;
    let vocales = ['a' , 'e', 'i', 'o' ,'u'];
    
    for(let a=0; a<str.length;a++){
        if (vocales.includes(str[a])){
            ++contador;
        }

    }
    return contador;
}
alert(countVowels(str));