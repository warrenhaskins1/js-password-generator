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


}

function generatePassword() {

  //This function will allow us to set the acceptable range for our passwordLength
  // function range(start, end) {
  //   return Array(end - start + 1).fill().map((_, idx) => start + idx)
  // }
  // var validPWLength = range(8, 128);
  // console.log();

  //Choose vars for our criteria types: UC LC num special to put in arrays.
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", '"', "+", ",", "-", "/", ":",];



  console.log(window.confirm("Welcome to the Javascript Password Generator! Choose from a group of criteria to be included in your new Password. Click OK to continue!"));
  
function selectUpperCase() {
    var upperCase = confirm("Would you like to use Upper Case Letters in your Password?");
    console.log(upperCase);
    // alert("You have selected Yes");
    // if (upperCase === "y") {
    //   window.alert("You have chosen Yes to include Upper Case Letters.");
    // } else {
    //   alert("You have chosen No to NOT include Upper Case Letters in your password.");
    // }
  }
  selectUpperCase();
  function selectLowerCase() {
    var lowerCase = confirm("Would you like to use Lower Case Letters in your Password Y/N?");
    console.log(lowerCase);
    // alert("You have selected Yes");
    // if (lowerCase === "y") {
    //   window.alert("You have chosen Yes to include Lower Case Letters.");
    // } else {
    //   alert("You have chosen No to NOT include Lower Case Letters in your password.");
    // }
  }
  selectLowerCase();
  function selectNumbers() {
    var numbers = confirm("Would you like to use numbers in your Password Y/N?");
    console.log(numbers);
    // alert("You have selected Yes");
    // if (upperCase === "y") {
    //   window.alert("You have chosen Yes to include numbers in your password.");
    // } else {
    //   alert("You have chosen No to NOT include numbers in your password.");
    // }
  }
  selectNumbers();
  function selectSpecialChar() {
    var specialChar = confirm("Would you like to use Special Characters in your Password Y/N?");
    console.log(specialChar);

    // alert("You have selected Yes");
    //   if (specialChar === "y") {
    //     window.alert("You have chosen Yes to include Special Characters.");
    //   } else {
    //     alert("You have chosen No to NOT include Special Characters in your password.");
    //   }
    // }
    selectSpecialChar();
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
    getPasswordLength();












  }

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

