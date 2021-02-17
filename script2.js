  // Assignment Code
//Array of lowercase letters to be in password
var lowerCase = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];

  //Array for uppercase to be in password
var upperCase = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];

// Array of special charecters to be in password
var specialChars = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  //Array of numbers to be in password
var numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//Function to get password length and what characters they want.
function getPasswordOption(){
    var length = parseInt(
        prompt("Please select how many characters you would want your password to be.")
    );
    
// Conditionals that check if the password is a number and between 8 and 128 characters long.
    if(isNaN(length) === true ) {
        alert('Password length must be a number.');
        return;
    };
    if (length > 128) {
        alert('Password must be less than 128 characters.');
        return;
    };
    if (length < 8 ){
        alert('Password must be more than 8 characters.');
        return;
    }
    // Variables to store the boolean on what type of characters are wanted in the password.
    var yesSpecialchars = confirm(
        'Click OK to confirm including special characters.'
    );
    var yesLowerCase = confirm(
        'Click OK to confirm including lower case characters.'
    );
    var yesUppercase = confirm(
        'Click OK to confirm including upper case characters.'
    );
    var yesNumericalchars = confirm(
        'Click OK to confirm including numerical characters.'
    );
    //Set conditional that alerts the user if all choices are declined
    if(
        yesLowerCase == false &&
        yesUppercase == false &&
        yesNumericalchars== false &&
        yesSpecialchars == false 
    ) {
             alert("You must press OK to one option.");
             return;
     }
     // Creating an object to take store the answers from the user
    var optionObject = {
        passwordLength: length,
        yesLowerCase: yesLowerCase,
        yesUppercase: yesUppercase,
        yesNumericalchars: yesNumericalchars,
        yesSpecialchars: yesSpecialchars
    };
    return optionObject;
}
//Function to get a random index from an array
function getRandom(arr){
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
    return randElement;
}

function generatePassword(){
    // Set the variable options to the retuned values of the getPasswordOption function.
    var options = getPasswordOption();
    var randomPassword = [];
    var possibleChars = [];
 
//Takes the Object of the getPasswordOption function to see if the values are true or false
//If true, the arrays (lowerCase, UpperCase, numericChars, specialChars) will be added to a larger array named possibleChars
    if(options.yesLowerCase){
        possibleChars = possibleChars.concat(lowerCase);
    }
    if(options.yesUpperCase){
        possibleChars = possibleChars.concat(upperCase);  
    }
    if(options.yesNumericalchars){
        possibleChars = possibleChars.concat(numericChars);
    }
    if(options.yesSpecialchars){
        possibleChars = possibleChars.concat(specialChars);  
    }
//This loop will take a random element from the possibleChars array and push it to the randomPassword array
    for ( var i = 0; i < options.passwordLength; i++){
        randomPassword.push(getRandom(possibleChars));
    }
//Returns the array
     return randomPassword.join('');
}


var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);