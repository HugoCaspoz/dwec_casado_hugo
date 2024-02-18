let fecha = document.getElementById('fecha');
let telefono = document.getElementById('telefono');
let correo = document.getElementById('correo');
let color = document.getElementById('color');
let ip = document.getElementById('ip');
let url = document.getElementById('url');
let contraseña = document.getElementById('contraseña');
let nif= document.getElementById('nif');
let matricula= document.getElementById('matricula');

fecha.onblur = function(){
    let textFecha=document.getElementById('textFecha')
    if(/\d{2}\/\d{2}\/\d{4}/.test(fecha.value)){
        textFecha.innerHTML='Fecha introducida correctamente: '+fecha.value
    }else{
        textFecha.innerHTML='Introduce la fecha de nuevo: '+fecha.value
    }
}

telefono.onblur = function(){
    let textTelefono=document.getElementById('textTelefono')
    if(/\(\+\d{2}\)\d{9}/.test(telefono.value.trim())){
        textTelefono.innerHTML='Telefono introducido correctamente: '+telefono.value
    }else{
        textTelefono.innerHTML='Introduce de nuevo el teléfono: '+telefono.value
    }
}