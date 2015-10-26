function chunk(arr, size) {

  var newArr = [];                                    // set up new array for push function later
  for (var i=0; i<arr.length; i+=size) {              // iterate over array in increments according to the (size) provided

    newArr.push(arr.slice(i, i+size));                // extract characters from position (i) through (i+size) and push them into new array
  };

  return newArr;                                        
};

chunk(["a", "b", "c", "d"], 2, "");
