///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////

  // 1) series of prompts for password criteria
  // 2) prompt for length of password (8 to 128 chars)
  // 3) prompt for lowercase, uppercase, numeric, and special chars
  // 4) confirm selections with user
  // 5) generate password

  let charsLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let charsUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let charsNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
  let charsSpecial =[",", ".", "/", "<", ">", "?", ";", ":", "[", "]", "{", "}", "|", "=", "+", "-", "_", ")", "(", "*", "&", "^", "%", "$", "#", "@", "!", "`", "~"];
  let lowerCase = false;
  let upperCase = false;
  let numbers = false;
  let special = false;
  //blank array that will be modified based on user inputs
  let userPassword = [""];

  //array called in for loop to ask the user questions one at a time
  let questions = [askLower, askUpper, askNumbers, askSpecial];

  // functions placed into "questions" array to prompt user with for loop.  if ok, use char set, else don't use char set
  function askLower (){
    if (window.confirm("Would you like to use lower case letters in your password?")) {
      lowerCase = true;
    } else {
      lowerCase = false;
    }
  }
  function askUpper (){
     if (window.confirm("Would you like to use upper case letters in your password?")) {
      upperCase = true;
     } else {
      upperCase = false;
    }
  }
  function askNumbers (){
    if (window.confirm("Would you like to use numbers in your password?")) {
      numbers = true;
    } else {
      numbers = false;
    }
  }
  function askSpecial (){
    if (window.confirm("Would you like to use special characters in your password?")) {
      special = true;
    } else {
      special = false;
    }
  }

  //user confirms if they want to use char set.  true = include, false = exclude.  clicking "ok" sets true.
  if (window.confirm("Would you like to generate a new password?")) {
    //user confirms if they want to use char set.  true = include, false = exclude.  clicking "ok" sets true.
    for (i = 0; i < questions.length; i++) {
      questions[i]();
    }
    //4 outcomes where special always true
    if ((lowerCase = true) && (upperCase = true) && (numbers = true) && (special = true)) {
      //concat all arrays
    } else if ((lowerCase = false) && (upperCase = true) && (numbers = true) && (special = true)) {
      //concat all but lowerCase
    } else if ((lowerCase = false) && (upperCase = false) && (numbers = true) && (special = true)) {
      //concat all but lowerCase
    } else if ((lowerCase = false) && (upperCase = false) && (numbers = false) && (special = true)) {
      //concat all but lowerCase
    } 
    //4 outcomes where numbers always true
      else if ((lowerCase = false) && (upperCase = false) && (numbers = true) && (special = false)) {
      //concat all but lowerCase
    } 
    // outcomes where upperCase always true
      else if ((lowerCase = false) && (upperCase = true) && (numbers = false) && (special = true)) {
      //concat all but lowerCase
    } else if ((lowerCase = false) && (upperCase = true) && (numbers = false) && (special = false)) {
      //concat all but lowerCase
    } 
    // outcomes where lowerCase always true
      else if ((lowerCase = true) && (upperCase = false) && (numbers = true) && (special = true)) {
      //concat all arrays
    } else if ((lowerCase = true) && (upperCase = false) && (numbers = false) && (special = true)) {
      //concat all but lowerCase
    } else if ((lowerCase = true) && (upperCase = false) && (numbers = false) && (special = false)) {
      //concat all but lowerCase
    }
    //10 outcomes, do the math to verify accuracy of 4 unique items with 2 outcomes being 10 results

    //ask users for length of password (8 to 128) via prompt
    //user inputs a number between 8 and 128.  This becomes the length of userPassword array.  Then, run a for loop of a concat array containing the lists that the user specified such as "concatArray(math.floor(math.random()*concatArray.length)", looping that until userPassword.length is reached.  Store results in userPassword[] and convert to a string using toString().
    
    //validate user input and verify at least one chars selected, else close program
    //create password and link it to provided code
  }
}


     
    
    
    
  

