function largestOfFour(arr) {
  var a = Math.max.apply(null, arr[0]);
  var b = Math.max.apply(null, arr[1]);
  var c = Math.max.apply(null, arr[2]);
  var d = Math.max.apply(null, arr[3]);                                   // find largest number in each array (four vars for four arrays)
  var string = (a + "," + b + "," + c + "," + d);                         // add max #s together in string
  var array = JSON.parse("[" + string.replace(/'/g,'"') + "]");           // convert string to array + remove quotation marks
  return array;
}
 
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


/* -- more scalable version:

function largestOfFour(arr) {
  var max = [];                                                           // set up new array  
  for (var i=0; i<arr.length; i++) {                                      // iterate over each
    var each = arr[i];                                                    // sets following function up for success
      var largest = Math.max.apply(null, each);                           // finds the largest number in each array
        max.push(largest);                                                // pushes number to new array
  }
  return max;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]], ""); */
