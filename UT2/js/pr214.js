let n= prompt("Dime un número");
function fact(n){
    let factorial=1;
     for (let a=n; a>=1; a--){
        factorial*=a;
     }
     alert(factorial);
}
fact(n);