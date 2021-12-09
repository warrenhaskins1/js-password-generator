// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  //  var passwordResult = {
  //    passwordLength: ;
  //    upperCase: ;
  //    lowerCase: ;
  //    specialChar: ;
  //  }
  //Choose vars for our criteria types: UC LC num special to put in arrays.
  var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", '"', "+", ",", "-", "/", ":",];

  var combinedArray = []

  if (conditions) {

    combinedArray.push(upperArray, lowerArray, numArray, specialCharArray)
    console.log(combinedArray);
  }

  //selecting array items based on boolean values
  var arrayItems = [ true ? []]

  //We need a way to get a random index selector from our passwordLength var
  //This will be our Random index selector
  var index = Math.floor(Math.random() * combinedArray.length);

  //We need a way to determine which arrays will be selected to combine based off of the boolean values we collected from our user input. Use conditioinal Statement
  //use typeof method NO use Array.sort?

  //We need a way to combine all of our selected arrays so that we can use our random index selector to choose values (Concat).push?


  //We need a way to display the output to the window

}

function generatePassword() {

  //Start the Generator with a Welcome Message
  console.log(window.confirm("Welcome to the Javascript Password Generator! Choose from a group of criteria to be included in your new Password. Click OK to continue!"));

  //Select Y/N for upper case letters
  function selectUpperCase() {
    var upperCase = confirm("Would you like to use Upper Case Letters in your Password?");
    console.log(upperCase);
    if (!upperCase) {
      alert("You have selected No upper case letters");
    } else {
      alert("You have selected Yes to upper case letters");
    }
  }
  //Call above function
  selectUpperCase();

  //Select Y/N for lower case letters
  function selectLowerCase() {
    var lowerCase = confirm("Would you like to use Lower Case Letters in your Password Y/N?");
    console.log(lowerCase);
    if (!lowerCase) {
      alert("You have selected No lower case letters");
    } else {
      alert("You have selected Yes to lower case letters");
    }

  }
  //Call above function
  selectLowerCase();

  //Select Y/N for numbers
  function selectNumbers() {
    var numbers = confirm("Would you like to use numbers in your Password Y/N?");
    console.log(numbers);
    if (!numbers) {
      alert("You have selected No Numbers");
    } else {
      alert("You have selected Yes to Numbers");
    }
  }
  //Call above function
  selectNumbers();

  //Select Y/N for specialCharacters
  function selectSpecialChar() {
    var specialChar = confirm("Would you like to use Special Characters in your Password Y/N?");
    console.log(specialChar);
    if (!specialChar) {
      alert("You have selected No special characters");
    } else {
      alert("You have selected Yes to special characters");
    }
  }
  //Call above function
  selectSpecialChar();

  //Select character length for password
  function getPasswordLength() {
    var passwordLength = prompt("Please select a password length between 8 and 128");
    console.log(passwordLength);
    if (passwordLength >= 8 && passwordLength <= 128) {
      window.alert("You have selected a password length of " + passwordLength);
    } else {
      alert("Your selection is not a number between 8 and 128, please try again.");
      return getPasswordLength();
    }
  }
  //Call above function
  getPasswordLength();














}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

