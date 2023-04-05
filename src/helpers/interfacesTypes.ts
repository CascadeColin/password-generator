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
  lowercase: false,
  uppercase: false,
  numbers: false,
  symbols: false,
  // password length (8-64)
  length: "8",
};

// controls content rendered to the form by formatting userSettings state var.  [index, key, value]
export type FormData = [number, string, string | boolean];

export interface Settings extends Form {
  success: boolean;
  password: string;
}

export const settings: Settings = {
  // toggleable user settings for password content
  lowercase: false,
  uppercase: false,
  numbers: false,
  symbols: false,
  // password length (8-64)
  length: "8",
  // flag for if form submission was successful
  success: false,
  // value of the password
  password: "",
};
