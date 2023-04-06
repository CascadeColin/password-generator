import { Form } from "./datatypes";
import { lowercase, uppercase, numbers, symbols } from "./passwordChars";
// randomize the array of chars
import { shuffle } from "./shuffle";

// logic for password creation
export function generatePassword(userSettings: Form): string {
  // length of password in number type
  let len = Number(userSettings.length);

  // restricts length to 8-128 characters
  if (len < 8) {
    len = 8;
  }
  if (len > 128) {
    len = 128;
  }

  // pool of character to draw from to create each password string index
  let characterSet: string = "";
  // password string return to the client
  let password: string = "";

  for (const [key, value] of Object.entries(userSettings)) {
    if (value && typeof value === "boolean") {
      switch (key) {
        case "lowercase":
          characterSet = characterSet.concat(lowercase);
          break;
        case "uppercase":
          characterSet = characterSet.concat(uppercase);
          break;
        case "numbers":
          characterSet = characterSet.concat(numbers);
          break;
        case "symbols":
          characterSet = characterSet.concat(symbols);
          break;
      }
    }
  }

  // shuffle function needs an array
  const characterArray: string[] = characterSet.split("");
  let i = 0;
  while (i < len) {
    shuffle(characterArray);
    password = password.concat(characterArray[0]);
    i++;
  }

  return password;
}
