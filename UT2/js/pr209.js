let calle = prompt("Dime tu calle");

switch (calle) {
    case 'Calle Los Claveles':
    case 'Calle El Rosal':
    case 'Calle Las Hortensias':
    case 'Calle Las Margaritas':
        console.log(`Tienes que usar la Línea 1 para ir desde la ${calle} hasta el trabajo`);
    break
    case 'Calle Teleno':
    case 'Calle Catoute':
    case 'Calle Peña Ubiña':
    case 'Calle Vizcodillo':
        console.log(`Tienes que usar la Línea 2 para ir desde la ${calle} hasta el trabajo`);
    break
    case 'Calle Astorga':
    case 'Calle La Bañeza':
    case 'Calle Benavente':
        console.log(`Tienes que usar la Línea 3 para ir desde la ${calle} hasta el trabajo`);
    break
    }