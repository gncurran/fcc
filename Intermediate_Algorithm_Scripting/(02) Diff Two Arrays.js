function diff(arr1, arr2) {

  function unique(elem) {                                                   // create a function to:
    if (arr1.indexOf(elem) === -1 || arr2.indexOf(elem) === -1) {           // check whether an element is not found in arr1 or arr2
      return elem;                                                          // if so, return that element
      }
    }
  
  var combined = arr1.concat(arr2);                                         // combine both arrays into one
   
  return combined.filter(unique);                                           // returned a new array populated with the elements that passed the check function we created
}

diff([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
