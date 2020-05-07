//MORSE_CODE required as indexed morse to ASCII object.
decodeMorse = function(morseCode){
  morseWords = morseCode.split(" ");
  decodedWord = "";
  for (let i = 0; i < morseWords.length; i++) {
  let currentWord = MORSE_CODE[morseWords[i]];
  let previousWord = MORSE_CODE[morseWords[i-1]];
    if (currentWord !== undefined) {
      decodedWord += currentWord;
    } else if (previousWord !== undefined) {
      decodedWord += " ";
    }
  }
  return decodedWord.trim();
}
