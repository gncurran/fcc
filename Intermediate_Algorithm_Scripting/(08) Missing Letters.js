function fearNotLetter(str) {
 
for(var i=0; i<str.length-1; i++) {
  if((str.charCodeAt([i+1]) - str.charCodeAt([i])) != 1) {        // if a character's unicode value is not 1 greater than the value of the proceeding character
    return String.fromCharCode(str.charCodeAt([i]) + 1);          // return the missing letter
    }
  }
return undefined;
}
 
fearNotLetter('abce');
