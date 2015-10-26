function repeat(str, num) {
  if (num < 1) return "";                                 // if number passed is negative, return empty string
  return --num ? str + repeat(str, num) : str;            // (decrease num by one whenever it's > 1 and repeat function) / (output string when num hits 1)
};

repeat("abc", 3);


/* -- alternate solution with while loop: 
function repeat(str, num) {
  if (num < 1) return "";
  var result = "";
  while (num > 1) {
    if (num = 1) {
      result += str;
    }
    num > 1, str += str;
  }
  return result + str;
};*/

/* -- alernate solution with for loop:
function repeat(str, num) {
  var result = '';

  for (i = 1; i <= num; i *= 2) {
    if ((num & i) == i) {                         // if num == i, then:
      result += str;                              // simply output the string to 'result'
    }
    str += str;                                   // otherwise add the string to itself (num - i) times
  }

  return result;
};
  
  
repeat("abc", 3, "");
