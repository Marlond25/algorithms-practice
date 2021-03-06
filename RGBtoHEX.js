// Way too easy with int.toString(16); this is more fun.

function rgb(r, g, b){
  let rToHex = getHex(r < 0 ? 0 : r > 255 ? 255 : r);
  let gToHex = getHex(g < 0 ? 0 : g > 255 ? 255 : g);
  let bToHex = getHex(b < 0 ? 0 : b > 255 ? 255 : b);
  return rToHex + gToHex + bToHex;
}

function getHex(value) {
  let hexCodes = readHex();
  const base = 16;
  let quotient = 1;
  let remainder = 0;
  let hex = "";
  while (quotient !== 0) {
    quotient = Math.floor(value/base);
    remainder = value - (base * quotient);
    value = quotient;
    hex = hexCodes[remainder] + hex;
  }
  return hex.padStart(2, "0");
}

function readHex() {
  return { 
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F"
  }
}
