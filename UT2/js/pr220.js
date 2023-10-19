let n = prompt("Dime un número");
function getFibonacciAt(n){
    let fi=0
    let bo=1;
    let nacci=0;
        for (let a=0;a<n;a++){
            nacci=bo;
            bo+=fi;
            fi=nacci;
        }
        alert (fi);
}

getFibonacciAt(n);