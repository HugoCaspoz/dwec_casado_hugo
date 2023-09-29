let numero = Number(prompt("Dime un número"));

while (!numero){
    numero = Number(prompt("Dime un número"));
}
console.log(`Has introducido el número ${numero}`);