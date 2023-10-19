let n= prompt("Dime un número de bytes");
let b = prompt("Dime la unidad de medida");
function convertToBytes(capacity, from){
    let resultado=0;
    switch (from) {
        case 'B':
        case 'Byte':
            resultado=capacity;
        break
        case 'KB':
        case 'Kilobyte':
            resultado=capacity*1000;
        break
        case 'MB':
        case 'Megabyte':
            resultado=capacity*1000000;
        break
        case 'GB':
        case 'Gigabyte':
            resultado=capacity*1000000000;
        break
        case 'TB':
        case 'Terabyte':
            resultado=capacity*1000000000000;
        break
        case 'PB':
        case 'Petabyte':
            resultado=capacity*1000000000000000;
        break
        case 'EB':
        case 'Exabyte':
            resultado=capacity*1000000000000000;
        break
        default:
            resultado=("Error");
        }
        alert(resultado);
}
convertToBytes(n,b);