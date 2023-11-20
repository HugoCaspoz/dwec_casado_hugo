let boton = document.getElementById('add-button');
let ul = document.querySelector('ul');
let texto = document.getElementById('input-text');
let id=1;
boton.addEventListener("click", (e)=>{
    e.preventDefault();
    if (texto.value.trim()!=''){
        ul.innerHTML+=`<li data-id=${id}>${texto.value.trim()} <button class="btn" data-id="eliminar${id}">Eliminar</button></li>`
        id+=1;
        let eliminar = document.querySelector(`eliminar${id}`);
        eliminar.dataset.id=id;
        let li = document.getElementById(`${id}`);
        eliminar.addEventListener("click", (e)=>{
            e.preventDefault();
            li.remove();
        })
    }
})

