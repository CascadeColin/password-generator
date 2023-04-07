import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { defaultPasswordSettings, FormData } from "../helpers/datatypes";
import { generatePassword } from "../helpers/passGenerator";
import { formSetup } from "../helpers/formSetup";

export default function PasswordGen() {
  const [userSettings, setUserSettings] = useState(defaultPasswordSettings);

  // initialize password state to show a password with default settings
  const [password, setPassword] = useState("");
  const [thematrix, setThematrix] = useState(generatePassword(userSettings));

  useEffect(() => {
    const interval = setInterval(
      () => setThematrix(generatePassword(userSettings)),
      50
    );
    return () => {
      clearInterval(interval);
    };
  }, [userSettings]);

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

  // updates state as user manipulates password settings
  function handleChangeEvent(e: ChangeEvent<HTMLInputElement>): void {
    // if boolean value, else string value
    if (e.target.value === "on") {
      setUserSettings({ ...userSettings, [e.target.id]: e.target.checked });
      setPassword("");
    } else {
      setUserSettings({ ...userSettings, [e.target.id]: e.target.value });
      setPassword("");
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
    setUserSettings(defaultPasswordSettings);
  }

  function copyToClipboard(e: FormEvent<HTMLButtonElement>): void {
    e.preventDefault();
    navigator.clipboard.writeText(password);
  }

  return (
    <>
      {password ? (
        <div className="">
          <h2 className="text-center mt-10 mb-1 text-2xl max-w-xl mx-auto">
            Your password:
          </h2>
          <p className="text-center mb-5 text-lg [word-wrap:break-word] h-32 max-w-xl mx-auto">
            {password}
          </p>
        </div>
      ) : (
        <div className="">
          <h2 className="text-center mt-10 mb-1 text-2xl max-w-xl mx-auto">
            Preparing your randomized password...
          </h2>
          <p className="text-center mb-5 text-lg [word-wrap:break-word] h-32 max-w-xl mx-auto">
            {thematrix}
          </p>
        </div>
      )}
      <div className="flex flex-col max-w-lg mx-auto">
        <h3 className="text-center mb-2 text-xl">
          Customize your new password:
        </h3>
        {/* probably should be its own component */}
        <form className="flex flex-col items-center">
          {renderForm.map(([i, key, value]: FormData) => {
            if (typeof value === "string") {
              return (
                <div key={i}>
                  <label htmlFor={key} className="leading-7 mb-[10px] ">
                    Password Length?
                  </label>
                  <input
                    type="number"
                    name={key}
                    id={key}
                    min="8"
                    max="128"
                    value={Number(value)}
                    step="1"
                    className="bg-white text-black h-[20px] w-11 ml-[10px]"
                    onChange={handleChangeEvent}
                  />
                </div>
              );
            }
            return (
              <div key={i}>
                <label htmlFor={key} className="leading-7 mb-[10px]">
                  Include {key}?
                </label>
                <input
                  type="checkbox"
                  id={key}
                  checked={value}
                  onChange={handleChangeEvent}
                  className="ml-[10px]"
                />
              </div>
            );
          })}
          <button
            className="rounded p-1 bg-slate-600 mt-2"
            onClick={formSubmit}
          >
            Generate Password
          </button>
          {/* once a password is generated, render copy password button */}
          {password && (
            <button
              className="rounded p-1 bg-slate-600 mt-2"
              onClick={copyToClipboard}
            >
              Copy Password
            </button>
          )}
        </form>
      </div>
    </>
  );
}
