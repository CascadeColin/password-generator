import { Form } from "./datatypes";
import { lowercase, uppercase, numbers, symbols } from "./passwordChars";
// randomize the array of chars
import { shuffle } from "./shuffle";

// logic for password creation
// TODO: clean up the code
export function generatePassword(userSettings: Form): string {
  let userPassword: string = "";
  for (const [key, value] of Object.entries(userSettings)) {
    if (value && typeof value === "boolean") {
      switch (key) {
        case "lowercase":
          userPassword = userPassword.concat(lowercase);
          break;
        case "uppercase":
          userPassword = userPassword.concat(uppercase);
          break;
        case "numbers":
          userPassword = userPassword.concat(numbers);
          break;
        case "symbols":
          userPassword = userPassword.concat(symbols);
          break;
      }
    }
  }
  const a = shuffle(userPassword.split(""));
  const len = Number(userSettings.length);
  a.splice(len, Infinity);
  const b = a.join("");
  return b;
}
