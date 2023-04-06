export interface Form {
  lowercase: boolean;
  uppercase: boolean;
  numbers: boolean;
  symbols: boolean;
  length: string;
  
}

export type FormContentProps = {
  setUserSettings: Function;
  userSettings: Form;
};

export const form: Form = {
  // toggleable user settings for password content
  lowercase: true,
  uppercase: true,
  numbers: true,
  symbols: true,
  // password length (8-64)
  length: "16",
};

// controls content rendered to the form by formatting userSettings state var.  [index, key, value]
export type FormData = [number, string, string | boolean];
