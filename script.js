// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
  
  

}

function generatePassword() {

  //This function will allow us to set the acceptable range for our passwordLength
  function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }
  var validPWLength = range(8, 128); // [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  console.log(passwordLength);
    
  //Choose vars for our criteria types: UC LC num special to put in arrays.
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", '"', "+", ",", "-", "/", ":",];


  var intro = console.log(window.confirm("Welcome to the Javascript Password Generator! Choose from a group of criteria to be included in your new Password. Click OK to continue!"));

  //The value that user inputs to our prompt field is stored in passwordLength
  var passwordLength = prompt("Please select a password length between 8 and 128");
   if (passwordLength !== validPWLength ) {
     alert("Not a valid selection, try again");
   }

  
       
     
  }


  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

