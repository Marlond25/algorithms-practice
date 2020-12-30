function digPow(n, p){
  const DIGITS = n.toString();
  let digits = [];
  let poweredDigits = [];
  let sum = 0;
  let k = -1;
  for (let i=0; i<DIGITS.length;i++) {
    digits.push(DIGITS[i]); 
  }
  for (let j in digits) {
    poweredDigits.push(digits[j]**p);
    p += 1;
    sum += poweredDigits[j];
  }
  let evaluation = sum / n;
  if (evaluation % 1 === 0) {
    k = evaluation;
  }
  return k;
}
