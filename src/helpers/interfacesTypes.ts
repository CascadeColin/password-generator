export interface Settings {
  lowercase: boolean;
  uppercase: boolean;
  numbers: boolean;
  symbols: boolean;
  length: number;
  success: boolean;
  password: string;
}

export type PasswordGenProps = {
  settings: Settings;
};

export type FormContentProps = {
  setUserSettings: Function;
  userSettings: Settings;
};

export const settings: Settings = {
  // toggleable user settings for password content
  lowercase: false,
  uppercase: false,
  numbers: false,
  symbols: false,
  // password length (8-64)
  length: 8,
  // flag for if form submission was successful
  success: false,
  // value of the password
  password: "",
};
