let str = prompt ("Dime una cadena");
function replaceWithPosition(str){
    str = str.toLowerCase();
    let letras = ['a','b','c','d','e','f','g','h','i','j','k','l', 'ñ','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let posicion=[];
    for(let a=0; a<str.length;a++){
        posicion+=(letras.indexOf(str[a])+1)+", ";
        
    }
    return posicion;
}
console.log(replaceWithPosition(str));