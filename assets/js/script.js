// Assignment code here

let generatePassword = function() {
  // Make sure that the password is a number and between 8 and 128 characters
  //var passWord = "";
  let passLength = window.prompt("How many characters do you need? (8 min 128 max)");
  passLength = parseInt(passLength);
  if (!passLength) {
    window.alert("You must choose a number between 8 and 128");
    return;
  } else if (passLength < 8 || passLength > 128) {
    window.alert("You must choose a number between 8 and 128");
    return;
  }

  // Set up window prompts and variables for responses for the confirmation prompt at the end

  let inputPos = "abcdefghijklmnopqrstuvwxyz"
  let verifyChar = 0;
  let capLetter = window.confirm("Do you need CAPITAL letters?");
  if (capLetter) {
    inputPos += inputPos.toUpperCase();
    verifyChar += 1;
    var capYes = "Capital Letters";
  } else {
    var capYes = "No Capital Letters";
    verifyChar += 0;
  }
  let lowLetter = window.confirm("Do you need lowercase letters?");
  if (!lowLetter) {
    inputPos = inputPos.replace(/abcdefghijklmnopqrstuvwxyz/g,'');
    var lowYes = "No Lowercase Letters"
    verifyChar += 0;
  } else {
    verifyChar += 2;
    var lowYes = "Lowercase Letters";
  }
  let numChar = window.confirm("Do you need numbers?");
  if (numChar) {
    inputPos += "1234567890";
    verifyChar += 4;
    var numYes = "Numbers"
  } else {
    var numYes = "No Numbers"
    verifyChar += 0;
  }
  let specChar = window.confirm("Do you need special characters? (?/<>*&!@...)");
  if (specChar) {
    inputPos += "!@#$%^&*()<>?";
    verifyChar += 8;
    var specYes = "Special Characters";
  } else {
    var specYes = "No Special Characters";
    verifyChar += 0;
  }
  // Confirmation prompt

  window.alert("You want a password that has " + passLength + " Characters, which include " + capYes + ", " + lowYes + ", " + numYes + ", and " + specYes + ".");

  // Set up the randomly selecting characters from the input string and looping till all characters are found
  var passWord = "";

  if (inputPos.length <= 0) {
    passWord = "Unable to form Password";
    return passWord;
  }

  // Verify that every Character that was selected is at least present once in the password

  var verifyFound = 0;
  while (verifyChar !== verifyFound){
    var verifyFound = 0;
    var passWord = "";
    for (let i = 0, n = inputPos.length; i < passLength; i++) {
      passWord += inputPos.charAt(Math.floor(Math.random() * n));
    }
  
    if (capLetter) {
      var checkForCap = /[A-Z]/.test(passWord);
      if (checkForCap) {
        verifyFound += 1;
      } else {
        verifyFound += 0;
      }
    }
    if (lowLetter) {
      var checkForLow = /[a-z]/.test(passWord);
      if (checkForLow) {
        verifyFound += 2;
      } else {
        verifyFound += 0;
      }
    }
    if (numChar) {
      var checkForNum = /\d/.test(passWord);
      if (checkForNum){
        verifyFound += 4;
      } else {
        verifyFound += 0;
      }
    }
    if (specChar) {
      var checkForSpec = /[\!\@\#\$\%\^\&\*\(\)\<\>\?]/.test(passWord);
      if (checkForSpec){
        verifyFound += 8;
      } else {
        verifyFound += 0;
      }
    }

    // If all characters selected are found then the password will print, otherwise it will run again

    if (verifyFound === verifyChar) {
      return passWord;
    }
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
