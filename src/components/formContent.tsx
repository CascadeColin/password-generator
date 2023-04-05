import React, { ChangeEvent, useState } from "react";
import { FormContentProps } from "../helpers/interfacesTypes";
import { generatePassword } from "../helpers/generator";

export default function FormContent(props: FormContentProps) {
  const [password, setPassword] = useState("");

  const { userSettings, setUserSettings } = props;
  //   console.log("FormContent state: ",userSettings)
  const mapSettings = Object.keys(userSettings);
  // don't need password, length, or success flag
  mapSettings.splice(4, Infinity);

  //   boolean switch for userSettings
  function handleBooleanChange(e: ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();
    let value = e.target.checked;
    setUserSettings({ ...userSettings, [e.target.id]: value });
  }

  function handlePasswordLength(e: ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();
    let value = e.target.value;
    setUserSettings({ ...userSettings, length: value });
  }

  function formSubmit(e: ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();
    const temp: string = generatePassword(userSettings);
    console.log(temp);
    setPassword(temp);
  }

  return (
    <>
      <form className="flex flex-col items-center">
        {mapSettings.map((x) => {
          return (
            <div key={x}>
              <label htmlFor={x}>Include {x}?</label>
              <input type="checkbox" id={x} onChange={handleBooleanChange} />
            </div>
          );
        })}
        <div>
          <label htmlFor="length">How long should it be?</label>
          <input
            type="number"
            name="length"
            id="length"
            min="8"
            max="64"
            className="bg-white text-black"
            onChange={handlePasswordLength}
          />
        </div>
        <button className="rounded p-1 bg-slate-400 mt-2" onClick={formSubmit}>
          Generate Password
        </button>
      </form>
      {/* conditionally rendered password */}
    </>
  );
}
