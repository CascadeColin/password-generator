import { ChangeEvent, FormEvent, useState } from "react";
import { form, FormData } from "../helpers/datatypes";
import { generatePassword } from "../helpers/generator";
import { formSetup } from "../helpers/formSetup";

export default function PasswordGen() {
  const [userSettings, setUserSettings] = useState(form);
  const [password, setPassword] = useState("");
  console.log("state: ", userSettings);
  console.log("password: ", password);

  const renderForm: FormData[] = formSetup(userSettings);

  function handleChangeEvent(e: ChangeEvent<HTMLInputElement>): void {
    if (e.target.value === "on") {
      setUserSettings({ ...userSettings, [e.target.id]: e.target.checked });
    } else {
      setUserSettings({ ...userSettings, [e.target.id]: e.target.value });
    }
  }

  function formSubmit(e: FormEvent<HTMLButtonElement>): void {
    e.preventDefault();
    setPassword(generatePassword(userSettings));
  }

  return (
    <>
      <form className="flex flex-col items-center">
        {renderForm.map(([i, key, value]: FormData) => {
          if (typeof value === "string") {
            return (
              <div key={i}>
                <label htmlFor={key}>Password Length? (between 8 and 64)</label>
                <input
                  type="range"
                  name={key}
                  id={key}
                  min="8"
                  max="64"
                  value={userSettings.length}
                  step="1"
                  className="bg-white text-black"
                  onChange={handleChangeEvent}
                />
                <p>Password length: {userSettings.length}</p>
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
        <button className="rounded p-1 bg-slate-400 mt-2" onClick={formSubmit}>
          Generate Password
        </button>
      </form>
      {password && <p className="text-center">Your password: {password}</p>}
    </>
  );
}
