let numero = prompt("Dime un número");

while (Number.isFinite(+numero)==false || numero==null || numero.trim()=='' || numero==NaN){
    // if (numero==0){
    //     break;
    // }
    numero = prompt("Dime un número");
}

console.log(`Has introducido el número ${numero}`);
