// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]
var allcharacters = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
var userChoice = prompt("What number of characters do you want for your password?");
console.log(userChoice)
console.log(typeof userChoice)
var length = parseInt (userChoice)

if (length < 8) {
  window.alert("Your password must have at least 8 charactersin it");
  return null;
}

if (length > 128) {
  window.alert("Your password must be less than 128 characters");
  return null;
}

var isupperCase = confirm("You must have have at least one upper case character in your password");

if (isupperCase === false) {
  window.alert("You must have have at least one upper case character in your password"); 
}

var islowerCase = confirm("You must have have at least one lower case character in your password")

var isspecialCharacters = confirm("You must have have at least one special character in your password")

var isnumber = confirm("You must have have at least one number in your password")
if (!isupperCase && !isspecialCharacters && !isnumber){
  alert("You must select one of these characters!")
  return;
}

if (islowerCase === false) {
  window.alert("You must have have at least one lower case character in your password");
  return null;
}


if (isnumber === false) {
  window.alert("You must have have at least one number in your password");
  return null;
}


if (isspecialCharacters === false) {
  window.alert("You must have have at least one special character in your password");
  return null;
}

//function generatePassword()//
//End with "function generatePassword()" that I placed above?)
}