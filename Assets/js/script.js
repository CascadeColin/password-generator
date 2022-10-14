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
  let charsLowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let charsUpperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let charsNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let charsSpecial = [
    ",",
    ".",
    "/",
    "<",
    ">",
    "?",
    ";",
    ":",
    "[",
    "]",
    "{",
    "}",
    "|",
    "=",
    "+",
    "-",
    "_",
    ")",
    "(",
    "*",
    "&",
    "^",
    "%",
    "$",
    "#",
    "@",
    "!",
    "`",
    "~",
  ];
  let lowerCase = false;
  let upperCase = false;
  let numbers = false;
  let special = false;
  //blank array that will be modified based on user inputs
  let userPassword = [];
  let pass;

  //array called in for loop to ask the user questions one at a time
  let questions = [askLower, askUpper, askNumbers, askSpecial];

  // functions placed into "questions" array to prompt user with for loop.  if ok, use char set, else don't use char set
  function askLower() {
    if (
      window.confirm(
        "Would you like to use lower case letters in your password?"
      )
    ) {
      lowerCase = true;
      userPassword = userPassword.concat(charsLowerCase);
    } else {
      lowerCase = false;
    }
  }
  function askUpper() {
    if (
      window.confirm(
        "Would you like to use upper case letters in your password?"
      )
    ) {
      upperCase = true;
      userPassword = userPassword.concat(charsUpperCase);
    } else {
      upperCase = false;
    }
  }
  function askNumbers() {
    if (window.confirm("Would you like to use numbers in your password?")) {
      numbers = true;
      userPassword = userPassword.concat(charsNumbers);
    } else {
      numbers = false;
    }
  }
  function askSpecial() {
    if (
      window.confirm(
        "Would you like to use special characters in your password?"
      )
    ) {
      special = true;
      userPassword = userPassword.concat(charsSpecial);
    } else {
      special = false;
    }
  }
  // Knuth shuffle as found at https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  //user confirms if they want to use char set.  true = include, false = exclude.  clicking "ok" sets true.
  if (window.confirm("Would you like to generate a new password?")) {
    //user confirms if they want to use char set.  true = include, false = exclude.  clicking "ok" sets true.
    for (i = 0; i < questions.length; i++) {
      questions[i]();
    }
    //check to make sure user selected at least one char set
    if (userPassword.length === 0) {
      window.alert(
        "You must select at least one character set.  Please try again!"
      );
    } else {
    }

    //random sort using Knuth method
    shuffle(userPassword);
    let passLengthString = prompt(
      "Please enter the number of characters to use in your password (between 8 and 128)."
    );

    //converts string to a useable number
    let passLength = Number(passLengthString);
    
    if (8 <= passLength && 128 >= passLength) {
      window.alert("correct length");
      //doubles the length of userPassword if user wants more characters than is available, then randomizes it
      if (passLength > userPassword.length) {
        userPassword = userPassword.concat(userPassword);
        //random sort using Knuth method
        shuffle(userPassword);
        
      } else {
      }
    } else {
      window.alert(
        "You selected an invalid password length.  Please try again!"
      );
    }
    userPassword.length = passLength;
    //new values
    console.log("adj passLength #: " + passLength);
    console.log("adj userPassword array length: " + userPassword.length);
    pass = userPassword.join('');
    console.log(pass);
    return pass;
  } else {
    window.alert('Click on "Generate Password" if you change your mind.');
  }
}
