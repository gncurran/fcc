function truncate(str, num) {
  if (str.length <= num) return str;            // if length of string is less than or equal to the provided number, return entire string

  if (num <= 3)
    return str.substr(0, num) + "...";          // return string with the last (num) characters replaced by "..."

  return str.substr(0, num-3) + "...";          // or else, return string with last (num-3) characters replaced by "..."  
};

truncate("A-tisket a-tasket A green and yellow basket", 11)
