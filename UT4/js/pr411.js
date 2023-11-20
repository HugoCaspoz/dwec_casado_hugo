let boton = document.getElementById('add-button');
let ul = document.querySelector('ul');
let texto = document.getElementById('input-text');
boton.addEventListener("click", (e)=>{
    e.preventDefault();
    ul.innerHTML+=`<li>${texto.value}</li>`
    
})