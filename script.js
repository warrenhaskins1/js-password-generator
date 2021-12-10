// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {

  var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", '"', "+", ",", "-", "/", ":"];
  var selection;

  //Start the Generator with a Welcome Message
  console.log(window.confirm("Welcome to the Javascript Password Generator! Choose from a group of criteria to be included in your new Password. Click OK to continue!"));

  //Select Y/N for upper case letters
  function selectUpperCase() {
    uC = confirm("Would you like to use Upper Case Letters in your Password?");
    console.log(uC)
  }
  //Call above function
  selectUpperCase();

  //Select Y/N for lower case letters
  function selectLowerCase() {
    lC = confirm("Would you like to use Lower Case Letters in your Password Y/N?");
    console.log(lC)
  }
  //Call above function
  selectLowerCase();

  //Select Y/N for numbers
  function selectNumbers() {
    numb = confirm("Would you like to use numbers in your Password Y/N?");
    console.log(numb)
  }
  //Call above function
  selectNumbers();

  //Select Y/N for specialCharacters
  function selectSpecialChar() {
    sC = confirm("Would you like to use Special Characters in your Password Y/N?");
    console.log(sC)
  }
  //Call above function
  selectSpecialChar();

  //Need logical comparisons to add arrays
  if (!uC && !lC && !numb && !sC) {
    selection = alert("Please select at least 1 criteria.");
  }
  else if (!uC && lC && numb && sc) {
    selection = lowerArray.concat(numArray, specialCharArray);
  }
  else if (!uC && !lC && numb && sC) {
    selection = numArray.concat(specialCharArray);
  }
  else if (!uC && !lC && !numb && sC) {
    selection = specialCharArray;
  }
  else if (!uC && lC && !numb && !sC) {
    selection = lowerArray;
  }
  else if (uC && !lC && numb && sC) {
    selection = upperArray.concat(numArray, specialCharArray);
  }
  else if (uC && !lC && !numb && sC) {
    selection = upperArray.concat(specialCharArray);
  }
  else if (!uC && !lC && !numb && !sC) {
    selection = upperArray;
  }
  else if (uC && lC && !numb && sC) {
    selection = upperArray.concat(lowerArray, specialCharArray);
  }
  else if (uC && lC && !numb && !sC) {
    selection = upperArray.concat(lowerArray);
  }
  else if (uC && lC && numb && !sC) {
    selection = upperArray.concat(lowerArray, numArray);
  }
  else if (!uC && lC && numb && !sC) {
    selection = lowerArray.concat(numArray);
  }
  else if (uC && !lC && numb && !sC) {
    selection = upperArray.concat(numArray);
  }
  else if (!uC && lC && !numb && sC) {
    selection = lowerArray.concat(specialCharArray);
  }
  else if (!uC && !lC && numb && !sC) {
    selection = numArray;
  }
  else if (uC && lC && numb && sC) {
    selection = upperArray.concat(lowerArray, numArray, specialCharArray);
  }

  //need to store the combined arrays
  var combinedArray = [];

  //Select character length for password
  function getPasswordLength() {
    passwordLength = prompt("Please select a password length between 8 and 128");
    console.log(passwordLength)
    if (passwordLength >= 8 && passwordLength <= 128) {
      window.alert("You have selected a password length of " + passwordLength);
    } else {
      alert("Your selection is not a number between 8 and 128, please try again.");
      return getPasswordLength();
    }
  }
  //Call above function
  getPasswordLength();

  //Loop to generate our random array values over the selected password length
  for (var i = 0; i < passwordLength; i++) {
    randomSelected = selection[Math.floor(Math.random() * selection.length)];
    //takes our combined array from user selection and assigns values from randomSelected
    passwordArray = [];
    passwordArray = combinedArray.concat(randomSelected);
    // console.log(combinedArray.concat(randomSelected));
    //  console.log(passwordArray.toString());
    // console.log(passwordArray);
    // console.log(passwordArray.toString());
    alert("Your Password is " + passwordArray.join(""));
    // console.log(password = passwordArray.join(""));
  }
   
   
  //


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


