function steamroller(arr) {
    var final = [];
    for (var i=0; i<arr.length; i++) {
        if (Array.isArray(arr[i])) {
            final = final.concat(steamroller(arr[i]));
        } else {
            final.push(arr[i]);
        }
    }
    return final;
}

steamroller([1, [2], [3, [[4]]]]);

/* alternate solution using arguments:
function steamroller(arr) {
  var flattenedArray = [];

  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };

  arr.forEach(flatten);
  return flattenedArray;
}
*/
