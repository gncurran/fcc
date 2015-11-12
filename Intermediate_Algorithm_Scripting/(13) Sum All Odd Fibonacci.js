function sumFibs(num) {
  var fib0 = 0, fib1 = 1, fib = 1, sum = fib0;
  
  while (fib <= num){
    if (fib % 2) {
        sum += fib1;
    }
    
    fib = fib0 + fib1;
    fib1 += fib0;
    fib0 = fib1 - fib0;
  }

  return sum;
}
sumFibs(1000);
