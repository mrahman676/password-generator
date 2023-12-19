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

    return true;

    }
    

///////////////////////////////////// FUNCTION RANDOM /////////////////////////////////////////////


// Function for getting a random element from an array

function getRandom(arr) {
  if (getRandom === 0) {
    alert("Error: No characters selected")
    return
  }
  
  var randomChar = Math.floor(Math.random() * arr.length);

  return arr[randomChar];
}

// Function to generate password with user input

// Add new combination of characters into an array dependent on user input


///////////////////////////////////// FUNCTION GENERATE PASSWORD ///////////////////////////////////////// 


function generatePassword(criteria) {
;

if (criteria.lower) {
  for (let i = 0; i < lowerCasedCharacters.length; i++) {
    combination.push(lowerCasedCharacters[i]);
}
}

if (criteria.upper) {
  for (let i = 0; i < upperCasedCharacters.length; i++) {
    combination.push(upperCasedCharacters[i]);
}
}

if (criteria.numeric) {
  for (let i = 0; i < numericCharacters.length; i++) {
    combination.push(numericCharacters[i]);
}
}

if (criteria.special) {
  for (let i = 0; i < specialCharacters.length; i++) {
    combination.push(specialCharacters[i]);
}
}

if (combination.length === 0) {
  alert("Error: No characters selected");
  return;
}

let password = '';

for (let i = 0; i < criteria.charInput; i++) {
  const randomChar = getRandom(criteria);
  if (randomChar !== null) {
    password += randomChar;
  } else {
    return;
  }
}

return password;

}

// Get references to the #generate element

const generateBtn = document.querySelector('#generate');

// Write password to the #password input


///////////////////////////////////// FUNCTION PRINT PASSWORD /////////////////////////////////////////////


function writePassword() {
  const criteria = getPasswordOptions();
  const password = generatePassword(criteria);

  if (password !== null) {
  const passwordText = document.querySelector('#password');
  passwordText.value = password;
}
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
