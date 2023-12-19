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

  // Ensuring input meets criteria for password character length

  let input = false;

  while (!input) {

  const enter = prompt("Enter the number of characters you want the password to have" + "(Remember that any password must have at least 8 characters and at most 128.)");

  const charInput = parseInt(enter);

  if (charInput >= 8 && charInput <= 128) {
    alert("You entered: " + charInput);
    input = true;
  }
  else {
    alert("Error, please try again")
  }
}
  // Ensuring input meets criteria for at least one character type

    let minimum = false;

    while (!minimum) {

    const lower = confirm("Are there are lowercase characters in your password?");

    const upper = confirm("Are there are uppercase characters in your password?");

    const numeric = confirm("Are there are numeric characters in your password?");

    const special = confirm("Are there are specialcase characters in your password?");

      if (lower || upper|| numeric || special) {
      minimum = true;
      }

      else {
        alert("At least one character type should be selected");
      } 
    }

    return { lower, upper, numeric, special };
    
  }
  
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

// 
function generatePassword(criteria) {
const combination = [];

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
    combination.push(lowerCasedCharacters[i]);
}
}



}

// if lower character is confirmed, generate a random lowercase character




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

