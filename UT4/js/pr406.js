let boton= document.getElementById('boton');
let simbolos = "0123456789ABCDEF";
let color = "#";
let fondo;
boton.addEventListener( 'click', (event) => {
    event.preventDefault();
    let n1=Math.trunc(Math.random()*255);
    let n2=Math.trunc(Math.random()*255);
    let n3=Math.trunc(Math.random()*255);

    document.body.style.backgroundColor = `rgb(${n1},${n2},${n3})`;
    } )
    