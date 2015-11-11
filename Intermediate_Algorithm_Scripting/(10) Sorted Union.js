function unite(arr1, arr2, arr3) {  
  var arrFinal = [];                                          // set up final array to push to
  
  for (var i=0; i<arguments.length; i++) {                    // iterate through each argument passed
    var arrayArguments = arguments[i];                        
  
  for (var j=0; j<arrayArguments.length; j++) {               // iterate through each value in each array
    var indexValue = arrayArguments[j];
  
  if (arrFinal.indexOf(indexValue) < 0) {                     // if a value in an array is not found in arrFinal:
    arrFinal.push(indexValue);                                // push the value to our array (arrFinal)
    }
  }
}
  return arrFinal;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
