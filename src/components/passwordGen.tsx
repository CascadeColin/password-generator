import React, { useState } from "react";
import { PasswordGenProps } from "../helpers/interfacesTypes";
import FormContent from "./formContent";

export default function PasswordGen(props: PasswordGenProps) {
  const { settings } = props;
  const [userSettings, setUserSettings] = useState(settings);
  console.log("state: ", userSettings)

  return (
    <>
      <h2 className="text-center mb-2 text-xl">Customize your new password:</h2>
      <FormContent
        userSettings={userSettings}
        setUserSettings={setUserSettings}
      />
    </>
  );
}
