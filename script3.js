// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {

    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var num = "0123456789";
    var special = "!@#$%^&*";
    

    //We need to convert array to num for pwLength

    //Start the Generator with a Welcome Message
    console.log(window.confirm("Welcome to the Javascript Password Generator! Choose from a group of criteria to be included in your new Password. Click OK to continue!"));

    //Select Y/N for upper case letters
    function selectUpper() {
        var selectUpper = confirm("Would you like to use Upper Case Letters in your Password?");
        console.log(selectUpper);
        if (!selectUpper) {
            alert("You have selected No upper case letters");
        } else {
            alert("You have selected Yes to upper case letters");
        }
    }
    //Call above function
    selectUpper();

    //Select Y/N for lower case letters
    function selectLower() {
        var selectLower = confirm("Would you like to use Lower Case Letters in your Password Y/N?");
        console.log(selectLower);
        if (!selectLower) {
            alert("You have selected No lower case letters");
        } else {
            alert("You have selected Yes to lower case letters");
        }
    }
    //Call above function
    selectLower();

    //Select Y/N for numbers
    function selectNum() {
        var selectNum = confirm("Would you like to use numbers in your Password Y/N?");
        console.log(selectNum);
        if (!selectNum) {
            alert("You have selected No Numbers");
        } else {
            alert("You have selected Yes to Numbers");
        }
    }
    //Call above function
    selectNum();

    //Select Y/N for specialCharacters
    function selectSpecial() {
        var selectSpecial = confirm("Would you like to use Special Characters in your Password Y/N?");
        console.log(selectSpecial);
        if (!selectSpecial) {
            alert("You have selected No special characters");
        } else {
            alert("You have selected Yes to special characters");
        }
    }
    //Call above function
    selectSpecial();

    //We need to make sure our types are valid (if conditional??)
    


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

