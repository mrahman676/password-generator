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

// Employee can use to generate a random password based on criteria they’ve selected (Criteria must dictate the type of password generated for user)

// For criteria to dictate password, if user selects lowercase, we want to get elements from lowercase array and so on. 

// We can create a condition where if a user creates a password based off one criteria to access that array. But if they want to use two we can create a new array which concatentates both arrays. We can have various options for new arrays based on which criteria the user wants. 

// Password is generated when the button is clicked (function writepassword() will write the new password and links to buttom)

// Prompt user to input number of characters of password they want, put condition in that ensures user enters value between 8 and 128

// Create confirms that ask user if they want Lowercase, Uppercase, Numeric or Special characters in their password.

// User input must work in operation and be validated by end result

// One character type should be selected for password to generate

// Once all prompts complete, the new password must be shown on page

// Function to prompt user for password options

  // Confirm that password is at least 8 characters but no more than 128


  function getPasswordOptions() {
  // Start with the prompts //

  let length = parseInt(prompt("Enter the number of characters you want in the password" + " It must be between 8 and 128 characters in length"))

      while (isNaN(length) || length < 8 || length > 128) {
        alert("Error: Please Try Again");
        length = parseInt(prompt("Enter the number of characters you want in the password" + " It must be between 8 and 128 characters in length"))
      }
    

  let lower = confirm("Do you want lowercase characters in your password?");
  let upper = confirm("Do you want uppercase characters in your password?");
  let numeric = confirm("Do you want numeric characters in your password?");
  let special = confirm("Do you want special characters in your password?");


  while (!(lower || upper || numeric || special)) {

    alert("A password requires at least one character type");

    lower = confirm("Do you want lowercase characters in your password?");
    upper = confirm("Do you want uppercase characters in your password?");
    numeric = confirm("Do you want numeric characters in your password?");
    special = confirm("Do you want special characters in your password?");
  }

  return {
    length: length,
    lower: lower,
    upper: upper,
    numeric: numeric,
    special: special
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  const randomI = Math.floor(Math.random() * arr.length);
  return arr[randomI];
}

// Function to generate password with user input
function generatePassword() {

  const options = getPasswordOptions();
  let characters1 = [];
  let characters2 = [];
  let NewPassword = '';

  if (options.lower) {

    characters1 = characters1.concat(lowerCasedCharacters);

    characters2.push(getRandom(lowerCasedCharacters));

  }

  if (options.upper) {

    characters1 = characters1.concat(upperCasedCharacters);

    characters2.push(getRandom(upperCasedCharacters));

  }

  if (options.numeric) {

    characters1 = characters1.concat(numericCharacters);

    characters2.push(getRandom(numericCharacters));

  }

  if (options.special) {

    characters1 = characters1.concat(specialCharacters);

    characters2.push(getRandom(specialCharacters));

  }

  for (let i = 0; i < options.length - characters2.length; i++) {
    const randomC = getRandom(characters1);
    NewPassword = NewPassword + randomC;
  }

  NewPassword = NewPassword + characters2.join('');


  return NewPassword;
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
