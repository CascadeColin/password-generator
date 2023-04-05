import { ChangeEvent, FormEvent, useState } from "react";
import { form, FormData } from "../helpers/interfacesTypes";
import { generatePassword } from "../helpers/generator";
import { formSetup } from "../helpers/formSetup";

export default function PasswordGen() {
  const [userSettings, setUserSettings] = useState(form);
  console.log("state: ", userSettings);

  const renderForm: FormData[] = formSetup(userSettings);

  function handleChangeEvent(e: ChangeEvent<HTMLInputElement>): void {
    if (e.target.value === "on") {
      setUserSettings({ ...userSettings, [e.target.id]: e.target.checked });
    } else {
      setUserSettings({ ...userSettings, [e.target.id]: e.target.value });
    }
  }

  function formSubmit(e: FormEvent<HTMLButtonElement>): void {
    e.preventDefault()
    // TODO: implement password randomization
    generatePassword(userSettings)
    // setPassword(temp);
  }

  return (
    <>
      <form className="flex flex-col items-center">
        {renderForm.map(([i, key, value]: FormData) => {
          if (typeof value === "string") {
            return (
              <div key={i}>
                <label htmlFor={key}>How long should it be?</label>
                <input
                  type="number"
                  name={key}
                  id={key}
                  min="8"
                  max="64"
                  className="bg-white text-black"
                  onChange={handleChangeEvent}
                />
              </div>
            );
          }
          return (
            <div key={i}>
              <label htmlFor={key}>Include {key}?</label>
              <input type="checkbox" id={key} checked={value} onChange={handleChangeEvent} />
            </div>
          );
        })}
        <button className="rounded p-1 bg-slate-400 mt-2" onClick={formSubmit}>
          Generate Password
        </button>
      </form>
      {/* conditionally rendered password */}
    </>
  );
}
