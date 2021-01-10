// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
  var passwordLength = prompt("How long do you want your password to be?");
    if ("8 >= passwordLength >= 128") {
      alert ('Ok!');
    } else {
      alert ('Must be between 8 and 128')
    }
  var passwordUpper = confirm("Do you want upper case letters?");
  var passwordLower = confirm("Do you want lower case letters?");
  var passwordNumeric = confirm("Do you want numbers?")
  var passwordSpecial = confirm("Do you want special characters?");

  
  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
