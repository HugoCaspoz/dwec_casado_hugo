
let mayor=-Infinity;
let menor=Infinity;
for (let i=0; i<5; i++){
    let n = prompt ("Dime un número")
    if (n>mayor){
        mayor=n;
    }
    if (n<menor){
        menor=n;
    }
}

console.log(`El mayor número es ${mayor} y el menor ${menor}`);
