function palindrome(str) {
  var lower = str.replace(/[\W_]/g, '').toLowerCase()       // global search to remove non-alphanumeric characters, underscores + apply lowercase
  var reverse = lower.split('').reverse().join('');         // reverse string

  return lower == reverse;                                  // check to see if first variable we created is equal to second (reversed)
}

palindrome("race Car");
