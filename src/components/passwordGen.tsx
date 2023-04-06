import { ChangeEvent, FormEvent, useState } from "react";
import { form, FormData } from "../helpers/datatypes";
import { generatePassword } from "../helpers/passGenerator";
import { formSetup } from "../helpers/formSetup";

export default function PasswordGen() {
  const [userSettings, setUserSettings] = useState(form);

  // initialize password state to show a password with default settings
  const [password, setPassword] = useState(generatePassword(userSettings));

  // if all booleans are false, set lowercase to true
  const { lowercase, uppercase, numbers, symbols } = userSettings;
  const bools = {
    lowercase,
    uppercase,
    numbers,
    symbols,
  };
  if (Object.values(bools).every((bool) => bool === false)) {
    setUserSettings({ ...userSettings, lowercase: true });
  }

  // generates data that is mapped to create form
  const renderForm: FormData[] = formSetup(userSettings);
  // console.log(renderForm)

  // updates state as user manipulates password settings
  function handleChangeEvent(e: ChangeEvent<HTMLInputElement>): void {
    const lengthNumber = Number(userSettings.length);
    console.log(lengthNumber);
    // if boolean value
    if (e.target.value === "on") {
      setUserSettings({ ...userSettings, [e.target.id]: e.target.checked });
    }
    // if string value
    else {
      setUserSettings({ ...userSettings, [e.target.id]: e.target.value });
    }
  }

  // creates a password for the user if form is filled out correctly
  function formSubmit(e: FormEvent<HTMLButtonElement>): void {
    e.preventDefault();
    const lengthNumber = Number(userSettings.length);

    // restricts length to 8-128 characters
    if (lengthNumber < 8) {
      setUserSettings({ ...userSettings, length: "8" });
    }
    if (lengthNumber > 128) {
      setUserSettings({ ...userSettings, length: "128" });
    }
    setPassword(generatePassword(userSettings));
  }

  function copyToClipboard(e: FormEvent<HTMLButtonElement>): void {
    e.preventDefault();
    navigator.clipboard.writeText(password);
  }

  return (
    <>
      <div>
        <h1 className="text-center mt-10 mx-10 mb-1">Your password:</h1>
        <p className="text-center mb-5">{password}</p>
      </div>
      <form className="flex flex-col items-center">
        {renderForm.map(([i, key, value]: FormData) => {
          if (typeof value === "string") {
            return (
              <div key={i}>
                <label htmlFor={key}>Password Length?</label>
                <input
                  type="number"
                  name={key}
                  id={key}
                  min="8"
                  max="128"
                  value={Number(value)}
                  step="1"
                  className="bg-white text-black"
                  onChange={handleChangeEvent}
                />
                <p>Password length: {Number(value)}</p>
              </div>
            );
          }
          return (
            <div key={i}>
              <label htmlFor={key}>Include {key}?</label>
              <input
                type="checkbox"
                id={key}
                checked={value}
                onChange={handleChangeEvent}
              />
            </div>
          );
        })}
        <button className="rounded p-1 bg-slate-600 mt-2" onClick={formSubmit}>
          Generate Password
        </button>
        <button
          className="rounded p-1 bg-slate-600 mt-2"
          onClick={copyToClipboard}
        >
          Copy Password
        </button>
      </form>
    </>
  );
}
