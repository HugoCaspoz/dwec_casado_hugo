let n1= prompt("Dime un número");
let n2= prompt("Dime un número");
let n3= prompt("Dime un número");

function desigualdad(a,b,c){
    if (a<(b+c) && b<(a+c) && c<(a+b)){
        alert("Se cumple el teorema");
    }else {
        alert("No se cumple el teorema")
    };
}

desigualdad (n1,n2,n3);