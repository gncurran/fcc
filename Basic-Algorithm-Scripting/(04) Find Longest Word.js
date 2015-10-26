function findLongestWord(str) {
   
  var a = str.split(' ');                       // split string by spaces (i.e. break sentence into its individual words)
  var b = 0;
  
  for (var i = 0; i < a.length; i++) {          // iterate over the # words in string
    if (a[i].length > b) {                      // if length of current word is greater than value of b
      b = a[i].length;                          // set b equal to that length
    }
  }
  
  return b;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
