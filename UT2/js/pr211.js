let n = Number(prompt("Dime un número"));

while (!n || n<=0){
    n = Number(prompt("Dime un número"));
}
if(n%2==1){
    console.log("El número es impar");
}else if (n%2==0){
    console.log("El número es par");
}else{
    console.log("Error");
}