let arr = prompt("Dime unos numeros");

function getOdd(arr) {
    arr=arr.split(",");
    let impares="";
    console.log(arr);
    for (let a = 0; a < arr.length; a++) {
        if (arr[a] % 2 == 1) {
            impares += arr[a];
        } 
        
    }
    console.log(impares);
}
    getOdd(arr)