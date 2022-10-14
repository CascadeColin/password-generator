///////// This file exists solely for isolating code and testing it.  Nothing in this file will be called to the deployed page.  I am retaining it here as a way to "show my work" for the graders. /////////////////////

// let charsLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// let charsUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// let charsNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let charsSpecial =[",", ".", "/", "<", ">", "?", ";", ":", "[", "]", "{", "}", "|", "=", "+", "-", "_", ")", "(", "*", "&", "^", "%", "$", "#", "@", "!", "`", "~"];
// let userPassword = [""];
// // let lowerCase = false;
// // let upperCase = false;
// // let numbers = false;
// // let special = false;

// // let testArray = charsLowerCase.concat(charsUpperCase);
// // console.log(testArray);

// // let r = (Math.random() + 1).toString(36).substring(12);
// // console.log("random", r);

// let i = 23459835;
// i = i.toString();
// console.log(typeof i);

// var item = items[Math.floor(Math.random()*items.length)];

// let arr = [1,3,56,'asdf'];
// console.log(arr.length);
// console.log(typeof arr.length);

//Fisher-Yates array shuffler!
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

// Used like so
var arr = [2, 11, 37, 42];
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
shuffle(arr);
shuffle(charsSpecial);
console.log(arr);
console.log(charsSpecial);
