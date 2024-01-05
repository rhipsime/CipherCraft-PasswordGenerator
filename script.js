// Array of special characters to be included in the password
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

// Array of numeric characters to be included in the password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in the password
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

// Array of uppercase characters to be included in the password
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

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

  // Validate the length input
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid number between 8 and 128.");
    return null;
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate that at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return null;
  }

  // Store user input in an object
  var passwordOptions = {
    length: length,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeNumeric: includeNumeric,
    includeSpecial: includeSpecial
  };

  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

// Function to generate a password with user input
function generatePassword() {
  var options = getPasswordOptions();
  if (!options) return null;

  // Array to store all possible characters based on user input
  var allCharacters = [];

  if (options.includeLowercase) {
    allCharacters = allCharacters.concat(lowerCasedCharacters);
  }

  if (options.includeUppercase) {
    allCharacters = allCharacters.concat(upperCasedCharacters);
  }

  if (options.includeNumeric) {
    allCharacters = allCharacters.concat(numericCharacters);
  }

  if (options.includeSpecial) {
    allCharacters = allCharacters.concat(specialCharacters);
  }

  // Generate the password by randomly selecting characters
  var password = "";
  for (var i = 0; i < options.length; i++) {
    var randomChar = getRandom(allCharacters);
    password += randomChar;
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Function to write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
