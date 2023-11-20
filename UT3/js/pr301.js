let user = 'Victor'

    
function cloneObject(obj){
    let clon = Object.assign({},obj);
    console.log(clon);
}
cloneObject(user)