let str = prompt ("Dime un heterograma");
str = str.toLowerCase();
function isHeterograma(str){
    let palabra={};
    for (let a=0;a<str.length;a++){
        let letra=str[a];
        if (palabra[letra]) {
            return false;
          } else {
            letras[letra] = true;
          }

}
return true;
}
console.log(isHeterograma(str));