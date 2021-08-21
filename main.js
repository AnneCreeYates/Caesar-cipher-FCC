function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const cipher = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";

  let deciphered = [];
  deciphered.push(str.replace(/[a-z]/gi, (item) => cipher[alphabet.indexOf(item)]));

  return deciphered.join(" ");
  
}

rot13("SERR PBQR PNZC");
