let obj1 = {
    a: 1,
    b: 2
  };
  
  let obj2 = {
    c: 2,
    a: 4
  };

  function containsObject(obj1, obj2) {
    let propiedades = true;
  
    for (let prop in obj1) {
      if (!obj2.hasOwnProperty(prop)) {
        propiedades=false
      }
    }
  
    return console.log(propiedades);
  }

containsObject (obj1,obj2);