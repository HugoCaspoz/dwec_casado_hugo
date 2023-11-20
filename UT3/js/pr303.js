let obj1 = {
    a: 1,
    b: 2
  };
  
  let obj2 = {
    c: 2,
    a: 4
  };

  function intersectObjects(obj1, obj2) {
    let intersectedObj = {};
  
    for (let prop in obj1) {
      if (obj2.hasOwnProperty(prop)) {
        intersectedObj[prop] = obj1[prop];
      }
    }
  
    return console.log(intersectedObj);
  }

intersectObjects (obj1,obj2);