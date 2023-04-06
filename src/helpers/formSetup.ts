import { Form, FormData } from "./datatypes";

// used to create the data that renders form content in passwordGen.tsx
export function formSetup(state: Form): FormData[] {
  const stateLength = Object.keys(state).length;
  const arr = [];
  for (let i = 0; i < stateLength; i++) {
    const subArr: FormData = [
      i,
      Object.keys(state)[i],
      Object.values(state)[i],
    ];
    arr.push(subArr);
  }
  return arr;
}
