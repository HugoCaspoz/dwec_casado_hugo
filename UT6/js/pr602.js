let table = document.getElementById('tabla');
table.addEventListener("click", handleClick);
table.addEventListener("contextmenu", rightClick);
for (let a=0; a<10; a++){
    table.innerHTML+=`<div id=${a} class="fila"></div>`
    for (let b=0;b<10;b++){
        let tr=document.getElementById(`${a}`)
        tr.innerHTML += `<div class="casilla">${(a)}${(b)}</div>`;
    }
}
function handleClick(event){
    console.log(event.target);
    if(!event.target.classList.contains('fijo')){
    event.target.classList.toggle('seleccionado')  
    }    
}
function rightClick(event){
    event.target.classList.add('fijo');
}