// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays

var up = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var low = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", '"', "+", ",", "-", "/", ":",];
var comb = [];



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
        selectLow();
        function selectNum() {
            var selectedNum = confirm("Would you like to use Numbers in your Password?");
            console.log(selectedNum);
            if (!selectedNum) {
                alert("You have selected No numbers");
            }
            selectNum();
            function selectSpecial() {
                var selectedSpecial = confirm("Would you like to use Special characters in your Password?");
                console.log(selectedSpecial);
                if (!selectedSpecial) {
                    alert("You have selected No Special Characters");
                }
                selectSpecial();

                if (selectedUp) {
                    comb += up;
                }
                if (selectedLow) {
                    comb += low;
                }
                if (selectedNum) {
                    comb += num;
                }
                if (selectedSpecial) {
                    comb += special;
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

                var comb = up.concat(low, num, special);
                console.log(comb);

                for (i =0; i < passwordLength; i++) {
                    var randomArray = comb[Math.floor(passwordLength * Math.random())];
                    console.log(randomArray);


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
        }
    }
}