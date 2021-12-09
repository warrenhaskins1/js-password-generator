// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
    //Get vars for our char types
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var num = "0123456789";
    var special = "~`!@#$%^&*()+?";
    var selected = " ";


    //We need to convert array to num for pwLength??

    //Start the Generator with a Welcome Message
    console.log(window.confirm("Welcome to the Javascript Password Generator! Choose from a group of criteria to be included in your new Password. Click OK to continue!"));

    //Select Y/N for upper case letters
    function selectUpper() {
        var selectedUpper = confirm("Would you like to use Upper Case Letters in your Password?");
        console.log(selectedUpper);
        if (!selectedUpper) {
            alert("You have selected No upper case letters");
        } else {
            alert("You have selected Yes to upper case letters");
        }
        //We need to make sure our types are valid (if conditional??--> if (condition){then})
        if (selectedUpper) {
            selected = upper;
        }
    }
    //Call above function
    selectUpper();

    //Select Y/N for lower case letters
    function selectLower() {
        var selectedLower = confirm("Would you like to use Lower Case Letters in your Password Y/N?");
        console.log(selectedLower);
        if (!selectedLower) {
            alert("You have selected No lower case letters");
        } else {
            alert("You have selected Yes to lower case letters");
        }
        //We need to make sure our types are valid (if conditional??--> if (condition){then})
        if (selectedLower) {
            selected = lower;
        }
    }
    //Call above function
    selectLower();

    //Select Y/N for numbers
    function selectNum() {
        var selectedNum = confirm("Would you like to use numbers in your Password Y/N?");
        console.log(selectedNum);
        if (!selectedNum) {
            alert("You have selected No Numbers");
        } else {
            alert("You have selected Yes to Numbers");
        }
        //We need to make sure our types are valid (if conditional??--> if (condition){then})
        if (selectedNum) {
            selected = num;
        }
    }
    //Call above function
    selectNum();

    //Select Y/N for specialCharacters
    function selectSpecial() {
        var selectedSpecial = confirm("Would you like to use Special Characters in your Password Y/N?");
        console.log(selectedSpecial);
        if (!selectedSpecial) {
            alert("You have selected No special characters");
        } else {
            alert("You have selected Yes to special characters");
        }
        //We need to make sure our types are valid (if conditional??--> if (condition){then})
        if (selectedSpecial) {
            selected = special;
        }
    }
    //Call above function
    selectSpecial();

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


    //We need to loop through random char that we get from user confirm and to the users selected pwLength. Use for iteration (i=0;<length;i++) and Math.Random from PRS.
    for (var i = 0; i < passwordLength; i++) {
        console.log(passwordLength);
    }


    // Write password to the #password input
    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;

    }
    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
}
