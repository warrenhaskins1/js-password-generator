// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input

var up = "";
var low = "";
var num = "";
var special = "";

var selected = "";

var password = "";

function selectUp() {
    var selectedUp = confirm("Would you like to use Upper Case Letters in your Password?");
    console.log(selectedUp);
    if (!selectedUp) {
        alert("You have selected No upper case letters");
    }
    selectUp();
    function selectLow() {
        var selectedLow = confirm("Would you like to use Lower Case Letters in your Password?");
        console.log(selectedLow);
        if (!selectedLow) {
            alert("You have selected No lower case letters");
        }
    }
    selectLow();
    function selectNum() {
        var selectedNum = confirm("Would you like to use Numbers in your Password?");
        console.log(selectedNum);
        if (!selectedNum) {
            alert("You have selected No numbers");
        }
    }
    selectNum();
    function selectSpecial() {
        var selectedSpecial = confirm("Would you like to use Special characters in your Password?");
        console.log(selectedSpecial);
        if (!selectedSpecial) {
            alert("You have selected No Special Characters");
        }
    }
    selectSpecial();

    if (selectedUp === true) {
        selected += up;
    }
    if (selectedLow === true) {
        selected += low;
    }
    if (selectedNum === true) {
        selected += num;
    }
    if (selectedSpecial === true) {
        selected += special;
    }

    function getPasswordLength() {
        var passwordLength = prompt("Please select a password length between 8 and 128");
        if (passwordLength >= 8 && passwordLength <= 128) {
            console.log(passwordLength);
            window.alert("You have selected a password length of " + passwordLength);
        } else {
            alert("Your selection is not a number between 8 and 128, please try again.");
            return getPasswordLength();
        }
    }
    //Call above function
    getPasswordLength();





}



function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);