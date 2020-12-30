function expandedForm(num) {
  const l = num.toString();
  const NUM = l.length;
  let traillingZeros = NUM;
  let position = 0;
  let expanded = [];
  for (let i=0;i<NUM;i++) {
    if (l[i] !== "0") {
      expanded.push(l[i].padEnd(traillingZeros, "0"));
    }
    traillingZeros -= 1;
  }
  return expanded.join(" + ");
}
