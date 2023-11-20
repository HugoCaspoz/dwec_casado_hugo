let users= prompt ("Dime usuarios");

function sendMessage(users){
    users=users.split(" ");
    users.forEach(user => {
        alert (`Hola ${user}, bienvenido al curso de DWEC`)
    });
}

sendMessage(users);