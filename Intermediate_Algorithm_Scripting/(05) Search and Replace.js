function myReplace(str, before, after) {

  var check = str.indexOf(before);                                  // find the index of the "before" string
  
  if (str[check] === str[check].toUpperCase()) {                    // check whether first letter is uppercase or not
    after = after.charAt(0).toUpperCase() + after.slice(1);         // make first letter of "after" string uppercase
  }
    str = str.replace(before, after);                               // replace "before" string with "after"

  return str;
}

myReplace("Let us go to the store", "store", "mall");
