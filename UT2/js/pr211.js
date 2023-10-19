let n = prompt("Dime un número");

while (Number.isFinite(+n)==false || n==null || n.trim()=='' || n==NaN || Number(n)<=0){
    n = Number(prompt("Dime un número"));
}
if(n%2==1){
    console.log("El número es impar");
}else {
    console.log("El número es par");
}