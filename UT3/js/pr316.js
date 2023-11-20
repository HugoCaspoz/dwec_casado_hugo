srr=[1,3,5]
pow=4

function createPow(srr,pow){
    finalPow="";
    for (let a=0; a<srr.length;a++){
        finalPow+=srr[a]**pow+",";
    }
    console.log(finalPow);
}

createPow(srr,pow);