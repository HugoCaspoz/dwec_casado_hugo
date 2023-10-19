let n= prompt("Dime un número");
function isPrime(n){
    while (n!=0){
        for (let a=2; a<n;a++){
            if ((n%a)==0){
                return false;
            } 
        }
        return true
    }

}

while (n!=0){
    n= prompt("Dime un número");
    if (isPrime(n)){
        console.log("Tu numero es primo");
    }else{
        console.log("Tu número no es primo");
    }
}
    
