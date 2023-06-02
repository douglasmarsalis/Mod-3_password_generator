// This code selects for the generate ID inside the button inside the HTML.
var generateBtn = document.querySelector("#generate");

//Arrays list
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
var numberSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
var specialCharacter = [" ", "!", """, "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", "]", "^", "_", "`", "{", "|", "}", "~",]

//Variable Declarations
var confirmLength = "";
var confirmLowercase;
var confirmUppercase;
var confirmNumberSet;
var confirmSpecialCharacter;

//Prompts for password length and character type.
function writePassword() {
  var length numberSet(prompt("Please enter a password length between 8 and 128 characters."));
  var characterType(prompt("Please enter a character type: Special, Number, Uppercase or Lowercase."));
}












var length = numberSet(prompt("Please enter a password length between 8 and 128 characters.")),
    characterType = prompt("Please enter a character type: Special, Number, Uppercase or Lowercase."),
    password = generatePassword();

   
/* The generatePassword stores info in the password variable. The passwordText code is linked to 
the password ID inside the HTML. */
function generatePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
/*This code will have the user click on the button and the password will be written - the 
writePassword can be found under the ABOVE function.*/
generateBtn.addEventListener("click", writePassword);


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



  // This is the line that displays on the screen.
  passwordText.value = password;

}


