const divImagen = document.getElementById('images');
let boton = document.getElementById('btn');

boton.addEventListener( 'click', (event) => {
    event.preventDefault();

    let images = document.querySelectorAll('img');
    let img = document.createElement("img");

    img.src=images[4].src;
    console.log(img);
    divImagen.prepend(img)
    images[4].remove();
    } )
    