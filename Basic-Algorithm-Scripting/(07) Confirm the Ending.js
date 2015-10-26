function end(str, target) {
  var test = str.substr(str.length - target.length);
  if (test == target) {
    return true;
  } else {
    return false;
  }
};

end("Connor", "Connor", "");
