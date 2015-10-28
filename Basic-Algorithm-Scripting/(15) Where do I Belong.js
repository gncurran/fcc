function where(arr, num) {
  arr.push(num);                                  // push given (num) into array
  arr.sort(function(a,b){                         // sort array given the following instructions (i.e. function):
    return a-b;                                   // from lowest to highest
  });
  return arr.indexOf(num);                        // return index where (num) was sorted into
}

console.log(where([40, 60], 50));
