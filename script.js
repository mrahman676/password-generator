////////////////////////////// VARIABLES /////////////////////////////////////////////////


// Array of special characters to be included in password
const specialCharacters = [
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

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
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



// Function to prompt user for password options

  // Confirm that password is at least 8 characters but no more than 128


///////////////////////////////////// FUNCTION PROMPTS /////////////////////////////////////////////

  function getPasswordOptions() {

  combinationArray = [];

    //////////// INPUT CHARACTER LENGTH PROMPT ////////////////

  const enter = prompt("Enter the number of characters you want IN the password" + " It must be between 8 and 128 characters in length");
  const charInput = parseInt(enter);

  if (isNaN(enter) || enter > 128 || enter < 8) {
    alert("Please enter a value between 8 and 128");
    return false;
  }

  //^^^^^^^^^^^^^ User will receive this alert is inputs NaN, a number > 128 and <8 ^^^^^^^


    if (confirm("Are there are lowercase characters in your password?")) {

    combinationArray = combinationArray.concat(lowerCasedCharacters);
    
    // if user confirms to use lowercase, lowercase characters will fill up new array //

    }

    if (confirm("Are there are uppercase characters in your password?")) {

    combinationArray = combinationArray.concat(upperCasedCharacters);

     // if user confirms to use uppercase, uppercase characters will fill up new array //

    }

    if (confirm("Are there numeric characters in your password?")) {

    combinationArray = combinationArray.concat(numericCharacters);

    // if user confirms to use numeric, numeric characters will fill up new array //

    }

    if (confirm("Are there are special characters in your password?")){

    combinationArray = combinationArray.concat(specialCharacters);

    // if user confirms to use special, special characters will fill up new array //

    }

    getRandom(combinationArray);

    return true;

    }
    

///////////////////////////////////// FUNCTION RANDOM /////////////////////////////////////////////


// function getRandom(arr) {}

///////////////////////////////////// FUNCTION GENERATE PASSWORD ///////////////////////////////////////// 


function generatePassword() {

let password = '';

for (let i = 0; i < charInput; i++) {
  var randomChar = Math.floor(Math.random() * arr.length);
      password = password + combinationArray[randomIndex]
}

return password;
}

///////////////////////////////////// FUNCTION PRINT PASSWORD /////////////////////////////////////////////



function writePassword() {
  const criteria = getPasswordOptions();
  const passwordText = document.querySelector('#password');

  if (criteria) {
    const password = generatePassword();
    passwordText.value = password;
  }

}

const generateBtn = document.querySelector('#generate');
generateBtn.addEventListener('click', writePassword);
