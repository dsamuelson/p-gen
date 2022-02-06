// Assignment code here

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
  }
  let lowLetter = window.confirm("Do you need lowercase letters?");
  if (!lowLetter) {
    inputPos = inputPos.replace(/abcdefghijklmnopqrstuvwxyz/g,'');
    var lowYes = "No Lowercase Letters"
  } else {
    verifyChar += 1;
    var lowYes = "Lowercase Letters";
  }
  let numChar = window.confirm("Do you need numbers?");
  if (numChar) {
    inputPos += "1234567890";
    verifyChar += 1;
    var numYes = "Numbers"
  } else {
    var numYes = "No Numbers"
  }
  let specChar = window.confirm("Do you need special characters? (?/<>*&!@...)");
  if (specChar) {
    inputPos += "!@#$%^&*()<>?";
    verifyChar += 1;
    var specYes = "Special Characters";
  } else {
    var specYes = "No Special Characters";
  }
  // Confirmation prompt

  window.alert("You want a password that has " + passLength + " Characters, which include " + capYes + ", " + lowYes + ", " + numYes + ", and " + specYes + ".")

  getPassWord();

  // Set up the randomly selecting characters from the input string and put in function so it can be called if all parameters aren't satisfied

  function getPassWord () {
    if (inputPos.length > 0) {
      for (let i = 0, n = inputPos.length; i < passLength; i++) {
        passWord += inputPos.charAt(Math.floor(Math.random() * n));
      }
    } else {
      passWord = "Unable to form Password";
    }

    // Verify that every Character that was selected is at least present once in the password

    let verifyFound = 0;
    if (capLetter) {
      /A-Z/.test(passWord);
      verifyFound += 1;
    }
    if (lowLetter) {
      /a-z/.test(passWord);
      verifyFound += 1;
    }
    if (numChar) {
      /\d+/.test(passWord);
      verifyFound += 1;
    }
    if (specChar) {
      /\!\@\#\$\%\^\&\*\(\)\<\>\?/.test(passWord);
      verifyFound += 1;
    }

     // If all characters selected are found then the password will print, otherwise it will run again

    if (verifyFound === verifyChar) {
      return passWord;
    } else {
      getPassWord();
    }
  }

  return passWord;
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
