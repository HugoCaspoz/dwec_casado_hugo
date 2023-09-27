let precioMan = prompt ("Dime el precio del kilo de manzanas")
precioMan=Number(precioMan)
let manzanas = prompt ("Dime el peso que has cogido de manzanas")
manzanas=Number(manzanas)

let precioNan = prompt ("Dime el precio del kilo de naranjas")
precioNan=Number(precioNan)
let naranjas = prompt ("Dime el peso que has cogido de naranjas")
naranjas=Number(naranjas)

let precioPlat = prompt ("Dime el precio del kilo de plátanos")
precioPlat=Number(precioPlat)
let platanos = prompt ("Dime el peso que has cogido de plátanos")
platanos=Number(platanos)

let pesoTotal=manzanas+platanos+naranjas
let precioTotal=precioMan*manzanas + precioNan*naranjas + precioPlat*platanos

console.log(`Has cogido un total de: ${pesoTotal}, y te ha costado: ${precioTotal}`);