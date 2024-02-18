let form = document.forms.registro;

let email = form.elements.email;
let password = form.elements.password;
let confPass = form.elements.confirm_password;

let passStregth=document.getElementById('passStregth');

// let registro = form.elements.registrarse;
// if (email.value!='' && password.value!='' && confPass!=''){
// registro.addEventListener("click", handleClick);
// }
email.onblur = function(){

    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))) {
        alert('Ingrese un correo electrónico válido');
    }
}

password.onblur = function(){
    let fuerza = calcularPassStregth(password.value);
    if (fuerza>=8){
        passStregth.innerHTML="Contraseña muy segura";
    }else if(fuerza>6){
        passStregth.innerHTML="Contraseña segura";
    }else if(fuerza > 4){
        passStregth.innerHTML="Contraseña normal";
    }else if (fuerza>3){
        passStregth.innerHTML="Contraseña poco segura";
    }else{
        passStregth.innerHTML="Contraseña muy poco segura";
    }

}

confPass.onblur = function(){
    if (password.value!=confPass.value){
        alert('Las contraseñas no coinciden');
    }

}

function calcularPassStregth(pass){
    let nivel=0;
    if (pass.length>10){
        nivel=nivel+3;
    }else if(pass.length>7){
        nivel=nivel+2;
    }else if (pass.length>5){
        nivel++
    }

    if(pass.match(/[A-Z]/)){
        nivel=nivel+2
    }
    if(pass.match(/[a-z]/)){
        nivel++
    }
    if (pass.match(/[0-9]/)){
        nivel=nivel+2;
    }
    return nivel;
}

if (password.value==confPass.value && email.value!='' && password.value!=''){
    form.addEventListener('submit', function(e){
        e.preventDefault();
        console.log("hola");
        alert('Correo electrónico: '+email.value+
        ' Contraseña: '+password.value);
    })
}