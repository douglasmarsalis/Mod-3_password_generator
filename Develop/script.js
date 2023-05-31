// This code selects for the generate ID inside the button inside the HTML.
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberSet = "0123456789";
var specialCharacter =  " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
                                                                 
var passwordLength = "";
var passwordLower;
var passwordUpper;
var passwordSpecial;
var passwordNumber;


// Prompt for Length Question, Alert for wrong number, Question again, and Alert for telling the final number.
//Prompt the user for the user criteria
function generatePassword() {
  var passwordLength = (prompt("How many characters would you like your password to contain (8-128 characters)?"));

//Password is between 8 and 128
  while(passwordLength >= 8 || passwordLength <= 128) {
    alert("Password length must be between 8 to 128 characters. Please try again!");
  var passwordLength = (prompt("How many characters would you like your password to contain (8-128 characters?"));
  }

//Make sure the input is validated
    alert("Your password will contain ${confirmLength} characters.");

// This will message the user about where their finished generated password will go.
    return "Your generated password will go here.";
} 
   
//Lowercase, uppercase, numbers and special characters

for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * password.length);
  password += character.substring(randomNumber, randomNumber +1);
  }

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

