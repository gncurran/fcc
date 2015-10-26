function factorialize(n) {
  if (n > 1) return n * factorialize(n - 1);      // if (n) is greater than 1, multiply it by 
  return 1;                                       // if (n) is not greater than 1, return 1
}

factorialize(4);
