let n1 = Number(prompt("Número 1"));
let n2 = Number(prompt("Número 2"));
let n3 = Number(prompt("Número 3"));
let n4 = Number(prompt("Número 4"));
let n5 = Number(prompt("Número 5"));

let array = [n1,n2,n3,n4,n5]

array.sort(function(a,b){
    return a-b;
});

console.log(`El mayor número es ${array[4]} y el menor ${array[0]}`);
