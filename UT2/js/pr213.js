let n= prompt("Dime un número");
function isPrime(n){
    
        for (let a=2; a<n;a++){
            if (n%a===0){
                return false;
            } 
        }
        return true
    

}
let k =2;
let b=0;
let numPrimo="";
while (n>=b){
    if (isPrime(k)){
        numPrimo=numPrimo+" "+k
        b++
    }
    k++;
}
alert(numPrimo);