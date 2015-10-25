function mutation(arr) {
  var result = true;
  var str1 = arr[0].toLowerCase().split('');
  var str2 = arr[1].toLowerCase().split('');

  var larger = str1.length > str2.length ? str1 : str2;           // "if str1 is longer than str2, set 'larger' = str1"
  var smaller = str1.length < str2.length ? str1 : str2;          // "if str1 is shorter than str2, set 'smaller' = str"

  for (var i = 0; i < smaller.length; i++) {                      // loop through the # letters in smaller string
    if (larger.indexOf(smaller[i]) === -1) {                      // if a letter in the smaller string is not found in the larger string, indexOf() returns -1
      result = false;                                             // if indexOf() returns -1, set the result as false
    }
  }
  
  return result;                                                  // otherwise, return the result as true
}

mutation(["hello", "neo"], "");
