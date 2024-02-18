let lista = document.querySelectorAll('li');
lista.forEach((li) => {
    li.addEventListener('click', seleccion)

});

function seleccion(event) {
    event.preventDefault;
    let sLi = event.currentTarget;
    if (event.ctrlKey) {
        sLi.classList.toggle('seleccionado')
    } else {
        if (sLi.classList.contains('seleccionado')) {
            sLi.classList.remove('seleccionado');
            
            lista.forEach(li => {
                li.classList.remove('seleccionado');
            });
        } else {

            lista.forEach(li => {
                li.classList.remove('seleccionado');
            });
            sLi.classList.add('seleccionado')
        }
    }
}