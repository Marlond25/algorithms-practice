function arrayDiff(a, b) {
  for (let i in b) {
    for (let j in a) {
      if (a[j] === b[i]) {
        a = a.filter(e => e !== b[i]);
      }
    }
  }
  return a;
}
