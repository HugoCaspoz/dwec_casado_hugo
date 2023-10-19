let k = prompt ("Dime un numero");
let n = prompt("Dime por cuantos multiplos quieres multiplicarlo")

function umOfMults( k, n ){
    let resultado=0;
    for (let a=1; a<=n;a++){
        resultado=resultado+k*a;
    }
    return alert(`El valor de la total es: ${resultado}`);

}

umOfMults(k,n);