let str = ['aBc', 'BE', 'hfa', 'AEO'];
function getUpperCase(str){
    //let mayus="ABCDEFGHIJKLMNÑOPQRSTUVWXIZ";
    // str=str.join(', ');
    // str=str.split("");
    // console.log(str);
    // for (let a=0; a<str.length; a++){
    //     if (!str[a].includes(mayus)){
    //         str[a].shift();
    //     }
    // }
    str=str.filter(item=>{
        if(item>='A' && item <= 'Z'){
            return true;
        }else{
            return false
        }
    })
    return str;

    
}
alert(getUpperCase(str))