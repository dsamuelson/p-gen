// Assignment code here

let randomNumber = function(min, max) {
  let value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

let coinFlip = function() {
  let coinToss = true;
  if (Math.random() > .5) {
    coinToss = false;
  }
  return coinToss;
}


let generatePassword = function() {
  // Make sure that the password is a number and between 8 and 128 characters
  let passWord = "";
  let passLength = window.prompt("How many characters do you need? (8 min 128 max)");
  passLength = parseInt(passLength);
  if (!passLength) {
    window.alert("You must choose a number between 8 and 128");
    return;
  } else if (passLength < 8 || passLength > 128) {
    window.alert("You must choose a number between 8 and 128");
    return;
  }
  // Set up window prompts and determine if we need to make room for the characters to output
  let inputPos = "abcdefghijklmnopqrstuvwxyz"
  let capLetter = window.confirm("Do you need CAPITAL letters?");
  if (capLetter) {
    inputPos += inputPos.toUpperCase();
    console.log(inputPos);
  }
  let lowLetter = window.confirm("Do you need lowercase letters?");
  if (!lowLetter) {
    inputPos = inputPos.replace(/abcdefghijklmnopqrstuvwxyz/g,'');
    console.log(inputPos);
  }
  let numChar = window.confirm("Do you need numbers?");
  if (numChar) {
    inputPos += "1234567890";
    console.log(inputPos);
  }
  let specChar = window.confirm("Do you need special characters? (?/<>*&!@...)");
  if (specChar) {
    inputPos += "!@#$%^&*()<>?";
    console.log(inputPos);
  }
  // Set up the password by inserting characters into random slots in the array
  if (inputPos.length > 0) {
    for (let i = 0, n = inputPos.length; i < passLength; i++) {
      passWord += inputPos.charAt(Math.floor(Math.random() * n));
    }
    return passWord;
  } else {
    passWord = "Unable to form Password"
    return passWord;
  }
  

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
