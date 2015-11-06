function translate(str) {
  var final = '';
  var reg = /[aeiou]/gi;                                                  // case insensitive global search for a vowel
  
  if (str[0].match(reg)) {                                                // if the first letter of the string is a vowel
    final = str + "way";                                                  // add "way" to the end of the string
  } else {                              

  var newStart = str.indexOf(str.match(reg)[0]);                          // otherwise, find the first vowel it encounters 
  final = str.substr(newStart) + str.substr(0, newStart) + 'ay';          // start the string with that vowel, followed by the omitted consonants, plus 'ay'
  }

  return final;
}

translate("algorithm");
