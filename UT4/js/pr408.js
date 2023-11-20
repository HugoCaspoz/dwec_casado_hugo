let divImagen = document.getElementById('images');
let boton = document.getElementById('btn');

boton.addEventListener( 'click', (event) => {
    event.preventDefault();
    let images = document.querySelectorAll('img');
    console.log(images);
    images = Array.from(images).sort(function(){return Math.random()-0.5});
    divImagen.innerHTML="";
    images.forEach(item =>{
        divImagen.innerHTML+=item.outerHTML;
    })
    } )
    