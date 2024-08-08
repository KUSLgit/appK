var encryptText;
var decryptText;
async function copyToClipboard(selector) {
  var element = document.querySelector(selector);
  await navigator.clipboard.writeText(element.value);
}
async function copyToClipboardP(selector) {
  var element = document.querySelector(selector);
  var actualValue = element.textContent.slice(16);
  await navigator.clipboard.writeText(actualValue);
  console.log(actualValue);
}

function encrypt() {
  encryptText = document.getElementById("encrypt");
  //? var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let inp1 = document.querySelector("#inp1");

  let letters = inp1.value.split("").reverse().join("");
  encryptText.innerHTML = "Encrypted Text: " + letters;

  // console.log(letters);
}

// for (let i = 0; i < alphabet.length; i++) {
//   for (let j = 0; j < letters.length; j++) {
//     if (letters[j] === alphabet[i]) {
//       letters[j] = alphabet[(i % 26) + 1]; // Move three positions forward in the alphabet
//     }
//   }
// }
function decrypt() {
  decryptText = document.getElementById("decrypt");

  var inp2 = document.querySelector("#inp2");
  let letters = inp2.value.split("").reverse().join("");
  decryptText.innerHTML = "Decrypted Text: " + letters;
  console.log(letters);
}
