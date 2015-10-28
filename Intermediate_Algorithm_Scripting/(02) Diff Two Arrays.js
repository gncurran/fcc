function diff(arr1, arr2) {

var combined = arr1.concat(arr2);                                       // combine both arrays into one

function check(elem) {
  if (arr1.indexOf(elem) === -1 || arr2.indexOf(elem) === -1) {         // if an element is not found in either arr1 or arr2
    return elem;                                                        // return that element
    }
  }
   
  return combined.filter(check);                                        // returned new array with the elements that passed the check function 
}

diff([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
