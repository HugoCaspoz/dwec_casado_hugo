let n= prompt("Dime un número de bytes");
let b = prompt("Dime la unidad de medida");
let c = prompt("Dime la unidad de medida a la que quieres convertir");

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
        return resultado;
    }
function covertCapacity(n, from, to){
     
    let bytes=convertToBytes(n,from);
    let resultado=0;
    switch (to) {
        case 'B':
        case 'Byte':
            return bytes;
        break
        case 'KB':
        case 'Kilobyte':
            return bytes*1000;
        break
        case 'MB':
        case 'Megabyte':
            return bytes*1000000;
        break
        case 'GB':
        case 'Gigabyte':
            return bytes*1000000000;
        break
        case 'TB':
        case 'Terabyte':
            return bytes*1000000000000;
        break
        case 'PB':
        case 'Petabyte':
            return bytes*1000000000000000;
        break
        case 'EB':
        case 'Exabyte':
            return bytes*1000000000000000;
        break
        
    }
}
alert (convertCapacity(n,b,c));