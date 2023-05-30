// Assignment Code - Part of original code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input - Part of original code
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button - Part of original code
generateBtn.addEventListener("click", writePassword);



// New code dev.to
var character = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var password = "";

//New code Greeting stackoverflow EXTRA
var hours = newDate().hours;
if(hours < 12) {
  alert("Good Morning!");
} else if (hours >= 12 || hours < 18){
  alert("Good Afternoon!");
} else {
  alert("Good Evening!");
}

// New code stackoverflow
var length = number(prompt("Please enter a password length between 8 and 128 characters.")),
characterTypes = (prompt("Please choose character type(s): lowercase, uppercase, number, or special character.")),
password = generatePassword ();

function generatePassword() {
  var characterSets = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numberSet: "0123456789",
    specialCharacter: " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  };

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * character.length);
    password += character.substring(randomNumber, randomNumber + 1);
  }
}