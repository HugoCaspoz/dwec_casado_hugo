let arr = [
    {   name: 'Victor',
        surname: 'González',
    },
    {
        name: 'Pepe',
        surname: 'Pérez',
    }]

function generateUsername(arr){
    for (let a=0;a<arr.length;a++){
        let number = ('0' + Math.floor(Math.random() * 100)).slice(-2);
        let usuario=arr[a];
        let nickname=`${usuario.name.toLocaleLowerCase().charAt(0)}${usuario.surname.toLocaleLowerCase()}${number}` 
        arr[a].nickname=nickname
    }
    console.log(arr);
}
generateUsername(arr);