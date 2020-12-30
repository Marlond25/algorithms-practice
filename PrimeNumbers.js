function isPrime(num) {
  if ((num === 1) || (num <= 0)) {
   return false;
  } else {
    let ul = Math.floor(Math.sqrt(num));
    let divisors = [];
    for (let i=2;i<=ul;i++) {
      let divisor = num / i;
      if (divisor % 1 === 0) {
        divisors.push(divisor);
      }
    }
    if (divisors.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}
