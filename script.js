// Assignment code here
let generatePassword = function() {
let passLength = window.prompt("How many characters do you need? (8 min 128 max)");
passLength = parseInt(passLength);
if (!passLength) {
  window.alert("You must choose a number between 8 and 128");
  return;
} else if (passLength < 8 || passLength > 128) {
  window.alert("You must choose a number between 8 and 128");
  return;
}
let capLetter = window.confirm("Do you need CAPITAL letters?");
let lowLetter = window.confirm("Do you need lowercase letters?");
let numChar = window.confirm("Do you need nubers?");
let specChar = window.confirm("Do you need special characters? (?/<>*&!@...)");


}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
