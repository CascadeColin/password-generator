import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { defaultPasswordSettings, FormData } from "../helpers/datatypes";
import { generatePassword } from "../helpers/passGenerator";
import { formSetup } from "../helpers/formSetup";
import { passwordGenStyle } from "../styles/passwordGenStyle";

export default function PasswordGen() {
  const [userSettings, setUserSettings] = useState(defaultPasswordSettings);

  // initialize password state to show a password with default settings
  const [password, setPassword] = useState("");
  // updates state in useEffect for "scrambling a new password"
  const [thematrix, setThematrix] = useState(generatePassword(userSettings));
  // UX for "copy password" button - displays a message for user
  const [copysuccess, setCopysuccess] = useState("");

  // "string scrambler"
  useEffect(() => {
    let interval: number;
    // only run effect if password is falsy
    if (!password) {
      interval = setInterval(
        () => setThematrix(generatePassword(userSettings)),
        50
      );
    }
    // clears the interval when password !== ""
    return () => {
      clearInterval(interval);
    };
  }, [password, userSettings]);

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
      setCopysuccess("");
    } else {
      setUserSettings({ ...userSettings, [e.target.id]: e.target.value });
      setPassword("");
      setCopysuccess("");
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
    // setUserSettings(defaultPasswordSettings);
    setCopysuccess("");
  }

  function copyToClipboard(e: FormEvent<HTMLButtonElement>): void {
    e.preventDefault();
    navigator.clipboard.writeText(password);
    setCopysuccess("Password copied to clipboard!");
  }

  function resetDefaultPasswordSettings(e: FormEvent<HTMLButtonElement>): void {
    e.preventDefault();
    setUserSettings(defaultPasswordSettings);
    setPassword("");
    setCopysuccess("");
  }

  return (
    <>
      {password ? (
        <div className={passwordGenStyle.passwordContainerStyle}>
          <h2 className={passwordGenStyle.passwordHeaderStyle}>
            Your password:
          </h2>
          <p className={passwordGenStyle.passwordContentStyle}>{password}</p>
        </div>
      ) : (
        <div className={passwordGenStyle.passwordContainerStyle}>
          <h2 className={passwordGenStyle.passwordHeaderStyle}>
            Preparing your password...
          </h2>
          <p className={passwordGenStyle.passwordContentStyle}>{thematrix}</p>
        </div>
      )}
      <div className={passwordGenStyle.formContainerStyle}>
        <div className={passwordGenStyle.formSubcontainerLeftStyle}>
          <h3 className={passwordGenStyle.formHeaderStyle}>
            Customize your password:
          </h3>
          {/* probably should be its own component */}
          <form className={passwordGenStyle.formStyle}>
            {renderForm.map(([i, key, value]: FormData) => {
              if (typeof value === "string") {
                return (
                  <div key={i}>
                    <label
                      htmlFor={key}
                      className={passwordGenStyle.formLabelStyle}
                    >
                      Password length?
                    </label>
                    <input
                      type="number"
                      name={key}
                      id={key}
                      min="8"
                      max="128"
                      value={Number(value)}
                      step="1"
                      className={passwordGenStyle.formInputLengthStyle}
                      onChange={handleChangeEvent}
                    />
                  </div>
                );
              }
              return (
                <div key={i}>
                  <label
                    htmlFor={key}
                    className={passwordGenStyle.formLabelStyle}
                  >
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
          </form>
        </div>
        <div className={passwordGenStyle.formSubcontainerRightStyle}>
          <button className={passwordGenStyle.buttonStyle} onClick={formSubmit}>
            Generate Password
          </button>
          {/* once a password is generated, render copy password button */}
          {password && (
            <>
              <button
                className={passwordGenStyle.buttonStyle}
                onClick={resetDefaultPasswordSettings}
              >
                Reset Settings
              </button>
              <button
                className={passwordGenStyle.buttonStyle}
                onClick={copyToClipboard}
              >
                Copy Password
              </button>
            </>
          )}
          {copysuccess && <p className={passwordGenStyle.copyConfirmationStyle}>{copysuccess}</p>}
        </div>
      </div>
    </>
  );
}
