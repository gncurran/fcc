function destroyer(arr) {
  var args = arr.slice.call(arguments);             // turns arguments list into full array
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)
