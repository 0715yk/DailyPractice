function equalsObj(obj1, obj2) {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' ) {
      return false;
    }
    if (Array.isArray(obj1) === true && Array.isArray(obj2) === true) {
      if (obj1.length !== obj2.length) {
        return false;
      }
      obj1.sort();
      obj2.sort();
      for (let i=0; i<obj1.length; i++) {
        if (obj1[i] !== obj2[i]) {
          return false;
        }
      }
    } else {
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
          return false;
        }
        for (let el in obj1) {
          if(obj1[el] !== obj2[el]) {
            return false;
          }
        }
    }
    return true;
  }
  var arr1 = ["foo", "bar"];
  var arr2 = ["foo", "bar"];
  var arr3 = ["foo", "bar", "stone"];
  
  var json1 = { foo : "bar" };
  var json2 = { foo : "bar" };
  var json3 = { foo : "bar", bar : "foo" };
  
  console.log(equalsObj(arr1,arr2));
  console.log(equalsObj(arr1,arr3));
  console.log(equalsObj(arr2,arr3));
  
  console.log(equalsObj(json1, json2));
  console.log(equalsObj(json1, json3));
  console.log(equalsObj(json2, json3));