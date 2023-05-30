// This code selects for the generate ID inside the button inside the HTML.
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";
  var length = ;
  var character = "";

  for (var i = 0; i <= 128; i++) {
    var randomNumber = Math.floor(Math.random() * character.length);
    password += character.substring(randomNumber, randomNumber +1);
  }
// This will help verify that the user has clicked on the button to get started.
  console.log("Thank you for clicking the button!")  
  var characterSets = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numberSet: "0123456789",
    specialCharacter: " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
}    
//Display the password to the page - this is done already.
// This will message the user about where their finished generated password will go
  return "Your generated password will go here.";
    
  };   
//Prompt the user for the user criteria

//Password is between 8 and 128

//Lowercase, uppercase, numbers and special characters

//Make sure the input is validated

/* The generatePassword stores info in the password variable. The passwordText code is linked to 
the password ID inside the HTML. */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // This is the line that displays on the screen.
  passwordText.value = password;

}

/*This code will have the user click on the button and the password will be written - the 
writePassword can be found under the ABOVE function.*/
generateBtn.addEventListener("click", writePassword);






/*
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
*/