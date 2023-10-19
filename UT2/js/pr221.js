let n = prompt ("dime un número");

function isNumber(n){
    n = trim(n)
    if (Number.isFinite(+n)==false && Number(n)==true){
        alert('True')
    }else {alert ('false')}

}

isNumber(n);