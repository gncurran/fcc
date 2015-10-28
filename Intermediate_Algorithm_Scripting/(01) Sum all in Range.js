function sumAll(arr) {

    var low = Math.min(arr[0], arr[1]);             // find smaller of two and set equal to 'low'
    var high = Math.max(arr[0], arr[1]);            // find bigger of two and set equal to 'high'
  
    var final = [];                                 // setup new array to push to
  
    for (var i = low; i <= high; i++) {             // starting at smaller #, increment by one until loop reaches bigger #
        final.push(i);                              // push each of these numbers (1, 2, 3, & 4) into the 'final' array
    }

    var total = final.reduce(function(a, b) {    
        return a + b;                               // use reduce method to add each of these together
    });

    return total;                                   // return that number
}
sumAll([1, 4]);
