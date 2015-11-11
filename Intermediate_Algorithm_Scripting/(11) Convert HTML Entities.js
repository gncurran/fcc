function convert(str) {                                               // answer using RegExp:

    var html = {                                                      // set up map of key:value pairs  
       "&":"&amp;",
       "<":"&lt;",
       ">":"&gt;",
       "\"":"&quot;",
       "\'":"&apos;"
    };
        str = str.replace(/&|<|>|"|'/gi, function(matched){           // global, case insensitive search to match those characters
        return html[matched];                                         // if there is a match, replace it with its key:value pair
        });

  return str;
}
convert('Dolce & Gabbana');



/*
function convert(str) {

  var split = str.split('');                                            // separate the string into letters

  for (var i=0; i<split.length; i++) {                                  // iterate through letters
    switch (split[i]) {                                                 // set up switch statement
      case '<':                                                         // in the case a letter matches the "<" character:
        split[i] = '&lt;';                                              // replace it with "&lt;"
        break;
      case '&':
        split[i] = '&amp;';
        break;
      case '>':
        split[i] = '&gt;';
        break;
      case '"':
        split[i] = '&quot;';
        break;
      case "'":
        split[i] = '&apos;';
        break;
    }
  }

  split = split.join('');
  return split;
}
*/
