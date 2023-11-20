let obj1 = {
    a: 1,
    b: 2
  };
  
  let obj2 = {
    c: 3,
    d: 4
  };
function mergeObjects(obj1,obj2){
    let merge = { ...obj1, ...obj2 }
    return console.log(merge); 
}
mergeObjects(obj1,obj2);