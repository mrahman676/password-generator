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

function getPasswordOptions() {

  while (true) {

  const enter = prompt("Enter the number of characters you want the password to have" + "(Remember that any password must have at least 8 characters and at most 128.)");
  const charInput = parseInt(prompt);

  if (charInput >= 8 && charInput <= 128) {
    alert("You entered: " + charInput);
    break;
  }
  else {
    alert("Error, please try again")
  }
  }

  const lower = prompt("Confirm there are lowercase characters in your password")

  const upper = prompt("Confirm there are uppercase characters in your password")

  const numeric = prompt("Confirm there are numeric characters in your password")

  const special = prompt("Confirm there are specialcase characters in your password")

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);














// var L = prompt("How long should password would be?");

// var plength = {

//   length: L,
//   upper:
//   lower:
//   special: 
//   numeric: 

