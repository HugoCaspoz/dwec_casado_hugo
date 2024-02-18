let str = prompt("Dime una palabra");

function isHeterograma(str){
    heterograma=true
    let letras=[]
    str=str.split('');
    for ( let a=0;a<str.length;a++) {
        if (!letras.includes(str[a])){
            letras+=str[a];
        }else{
            heterograma= false
        }
    }
    console.log(letras);
    return heterograma
    
}
alert(isHeterograma(str));