let len = prompt("longitud");
let min = prompt("minimo");
let max = prompt("maximo");

function ascendDescend(len, min, max) {
    let cadena = "".padEnd(len, minimoMaximo(min, max))
    return cadena;
}

function minimoMaximo(min, max) {
    let a = min;
    let b = max;
    let str = "";
    while (a < max) {
        str += a;
        a++;
    }
    while (b > min) {
        str += b;
        b--
    }
    return str;
}
console.log(ascendDescend(len, min, max));