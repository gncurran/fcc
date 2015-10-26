function titleCase(str) {
  var split = str.toLowerCase().split(/\s+/g);                              // make all lowercase, split each word into own string
  
  for (var i=0; i < split.length; i++) {
    split[i] = split[i].substr(0,1).toUpperCase() + split[i].substr(1);     // makes first character (i.e. letter) of each string (i.e. word) uppercase + adds rest of word
  }
  return split.join(' ');                                                   // reverts all words back into one string with a space in between each
}

titleCase("I'm a liTTle tea pot", "");
