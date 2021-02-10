//Array of lowercase letters to be in password
var lowerCasedCharacters = [
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
var upperCasedCharacters = [
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
var specialCharacters = [
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
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  //Function to prompt user for password
function getPasswordOption(){
    var length = parseInt(
        prompt("How many charecters would you like your password to contain?")
    );
    //Conditional statement to check if password length is an int. Promt ends if this value is false 
    if (isNaN(length) === true) {
        alert('Password length must be provided as a number');
        return
    }
    //Conditional statement to check is password length is at least 8 charecters long.
    if (length < 8) {
        alert('Password length must be at least 8 characters');
        return;
      }
    //Conditional statement to check if password length is less than 128 charecters.
    if (length > 128) {
        alert('Password length must less than 129 characters');
        return;
      } 
    //Variable to store boolean to store special characters
    var hasSpecialCharacters = confirm(
        "Click OK to confirm including special characters."
    );
    //Variable to store boolean to store numbers.
    var hasNumericCharacters = confirm(
        "Click OK to confirm including numerical characters."
    );
    //Variable to store boolean to store lower case characters.
    var hasLowerCasedCharacters = confirm(
        'Click OK to confirm including lowercase characters.'
      );
    //Variable to store boolean to store upper case characters.
    var hasUpperCasedCharacters = confirm(
        'Click OK to confirm including uppercase characters.'
      );

    //Conditional statement to check if user does not include of characters. Password generator ends if all variables are false
    if(
        hasLowerCasedCharacters === false &&
        hasUpperCasedCharacters === false &&
        hasSpecialCharacters === false &&
        hasNumericCharacters === false
    ) {
        alert("Must select at least one character type");
        return;
    }

    //Object to store user input
    var passwordOptions= {
        length: length,
        hasLowerCasedCharacters: hasLowerCasedCharacters,
        hasNumericCharacters: hasNumericCharacters,
        hasUpperCasedCharacters: hasUpperCasedCharacters,
        hasSpecialCharacters:hasSpecialCharacters
    };
    
    return passwordOptions;
}

function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];

    return randElement;
}

//Function to generate password with user input
function generatePassword(){
    var options = getPasswordOption();
    //Variable to store password while its being created.
    var result = [];
    //Array to store types of characters to include in password
    var possibleCharacters = [];
    //Array to contain one of each type of chosen character to ensure each will be used
    var guaranteedCharacters = [];
    //Conditional statement that adds array of special characters into array of possible characters.
    //Push new random special characters to guranteedCharacters
    if (options.hasSpecialCharacters){
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        guaranteedCharacters.push(getRandom(specialCharacters));
    }
    //Conditional statement that adds array of lower case characters into array of possible characters.
    //Push new random lower case characters to guranteedCharacters
    if (options.hasLowerCasedCharacters){
        possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
        guaranteedCharacters.push(getRandom(lowerCasedCharacters));
    }
    //Conditional statement that adds array of upper case characters into array of possible characters.
    //Push new random upper case characters to guranteedCharacters
    if (options.hasUpperCasedCharacters){
        possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
        guaranteedCharacters.push(getRandom(upperCasedCharacters));
    }
    //Conditional statement that adds array of numerical characters into array of possible characters.
    //Push new random numerical characters to guranteedCharacters
    if (options.hasNumericCharacters){
        possibleCharacters = possibleCharacters.concat(numericCharacters);
        guaranteedCharacters.push(getRandom(numericCharacters));
    }
    //For loop to iterate over the password length, that selects random indices from the array of possible characters
    for (var i= 0; i < options.length; i++){
        var possibleCharacter = getRandom(possibleCharacters);
       
        result.push(possibleCharacter);
    }
    //For loop to mix in at least one of each guaranteed character 
    for (var i = 0; i< guaranteedCharacters.length; i++){
        result[i] = guaranteedCharacters[i];
    }
    //Turn result into a a string
    return result.join('')
    }

    //Get references to #generate element
    var generateBtn = document.querySelector("#generate");
    //Write password to the #password input
    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;
    }

    generateBtn.addEventListener("click", writePassword);


    