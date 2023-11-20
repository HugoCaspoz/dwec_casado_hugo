let parrafos=document.getElementById('parrafos');
let enlace= document.getElementById('segundo-enlace');
let linkGoogle=document.getElementById('links-google-es');
let palabras=document.getElementById('palabras-segundo-parrafo');
let p = document.querySelectorAll('p');
let a = document.querySelectorAll('a');

parrafos.textContent = p.length;
enlace.textContent = a[1];
palabras.textContent=p[1].innerHTML.split(" ").length;

let contador=0;
a.forEach(element => {
    if(element.href==`https://www.google.es/`){
        contador++;
    }
});
linkGoogle.textContent=contador;