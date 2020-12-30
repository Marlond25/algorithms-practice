function pigIt(str){
  let words = str.split(" ");
  let pigTranslation = [];
  for (let i in words) {
    let dontMove = Array.from(words[i]);
    let move = dontMove.shift();
    let pigWord = dontMove.join("") + move;
    pigTranslation.push(isAlphaNumeric(pigWord) ? pigWord + "ay" : pigWord);
  }
  return pigTranslation.join(" ");
}

function isAlphaNumeric(str) {
  let code;
  let i;
  let len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  }
  return true;
