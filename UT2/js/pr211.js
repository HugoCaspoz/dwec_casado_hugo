let n = prompt("Dime un número");

while (Number.isFinite(+numero)==false || numero==null || numero.trim()=='' || numero==NaN){
    n = Number(prompt("Dime un número"));
}
if(n%2==1){
    console.log("El número es impar");
}else {
    console.log("El número es par");
}