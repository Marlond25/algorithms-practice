function solution(input, markers) {
  let inputs = input.split("\n");
  let output = "";
  for (let line in inputs) {
    for (let j=0;j<inputs[line].length;j++) {
      if ((markers.indexOf(inputs[line][j]) === -1)) {
        output += inputs[line][j];
      } else {
        break;
      }
    }
    output = output.trim();
    output += "\n";
  }
    return output.trim();
}
