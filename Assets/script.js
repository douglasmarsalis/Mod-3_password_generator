//This Assignment is to create a RANDOM PASSWORD GENERATOR USING JAVASCRIPT.

// This query selector selects for the generate ID for the button in the HTML file.
document.querySelector("#generate").addEventListener("click", beginPrompt);

// Other IDs --> password
// Classes listed inside the HTML --> card, card-header, card-body, and card-footer: PROBABLY WON'T NEED

//Arrays list
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var numberSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var specialCharact = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

//Variable declarations list
var confirmLength = "";
var confirmLowercase;
var confirmUppercase;
var confirmNumberSet;
var confirmSpecialCharact;

/*This is a loop for the Message Prompt for password length.  It will make sure that 
the length falls within the limits of 8 - 128 characters*/
// This generate function is a LONG FUNCTION.  It will finish AFTER the returnRandomPassword at the bottom of the page!!
function generatePassword() {
// This Message Prompt will ask the total number of characters the USER would like to have.
var confirmLength = (prompt("Please enter a password character length between 8 and 128 characters.")); 
  while(confirmLength < 8 || confirmLength > 128) {
    alert("Sorry, the length MUST be between 8 and 128 characters!");
    var confirmLength = (prompt("Please enter a password character length between 8 and 128 characters."))
  }


// Message reports back how many charactes the USER will have.  
    alert(`Your password will have ${confirmLength} characters!`);

/* These are additional Message Prompts for confirming other requirements needed to generate the password. 
The user has a choice to include the characters or not to include the characters by clicking OK or CANCEL.*/
var confirmLowercase = confirm("Please click the OK button to include LOWERCASE characters.  If not, click CANCEL.");
var confirmUppercase = confirm("Please click the OK button to include UPPERCASE characters. If not, click CANCEL.");
var confirmNumberSet = confirm("Please click the OK button to include NUMBERS. If not, click CANCEL.");
var confirmSpecialCharact = confirm("Please click the OK button to include SPECIAL characters.  If not, click CANCEL.");

// To make sure the USER chooses at least one of the requirements from the above confirmation, a Boolean is used.
while(lowercase === false && uppercase === false && numberSet === false && specialCharact === false) {
    alert("Sorry, you MUST click OK for at least ONE of the characters to continue!")
  var confirmLowercase = confirm("Please click the OK button to include LOWERCASE characters.  If not, click CANCEL.");
  var confirmUppercase = confirm("Please click the OK button to include UPPERCASE characters. If not, click CANCEL.");
  var confirmNumberSet = confirm("Please click the OK button to include NUMBER characters. If not, click CANCEL.");
  var confirmSpecialCharact = confirm("Please click the OK button to include SPECIAL characters.  If not, click CANCEL.");
}

 // This will concatenate (link) the characters together in a string.
      var passwordCharacters = []
     
    if (confirmLowercase) {
      passwordCharacters = passwordCharacters.concat(lowercase)
    }

    if (confirmUppercase) {
      passwordCharacters = passwordCharacters.concat(uppercase)
    }

    if (confirmNumberSet) {
      passwordCharacters = passwordCharacters.concat(numberSet)
    }

    if (confirmSpecialCharact) {
      passwordCharacters = passwordCharacters.concat(specialCharact)
    }

      console.log(passwordCharacters)

//The empty string will be filled based on the loop of random characters from the array.   
var randomPassword = ""

  for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;      
}

// This function will output the password to the screen.
function beginPrompt() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
// This line that will display to the screen.
  passwordText.value = password;
}
