function spinalCase(str) {
  str = str.replace(/\s+|_+/g, '-');                      // matches all spaces and underscores and replaces them with dashes
  str2 = str.replace(/([a-z])([A-Z])/g, '$1-$2');         // inserts a dash between lowercase and uppercase letters with no spaces in between
  str3 = str2.toLowerCase();                              // sets everything to lowercase
  return str3;
}

spinalCase("thisIsSpinalTap");
