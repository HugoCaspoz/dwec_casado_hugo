let obj = {
    a: 1,
    b: 2,
    c: undefined
  };

function removeUndefined(obj) {
    let obj2 = {};
  
    for (let prop in obj) {
      if (obj[prop] !== undefined) {
        obj2[prop] = obj[prop];
      }
    }
  
    return console.log(obj2);
  }

  removeUndefined(obj);