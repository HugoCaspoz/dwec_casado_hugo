let n= prompt("Dime un operador");
let k= prompt("Dime un operando");
let a= prompt("Dime signo");

function calc(operador, operando1, operando2){
    let resultado=0;
    switch (operando2) {
        case '+':
            resultado=(operador+operando1);
        break
        case '-':
            resultado=(operador-operando1);
        break
        case '*':
            resultado=(operador*operando1);
        break
        case '/':
            resultado=(operador/operando1);
        break
        case '^':
            resultado=(operador**operando1);
        break
        case '%':
            resultado=(operador%operando1);
        break
        default:
            resultado=("Operando no válido");
        }
        alert(resultado);
    
    
}
calc(n,k,a);