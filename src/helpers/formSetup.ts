import { Form, FormData } from "./interfacesTypes";

export function formSetup(state: Form): FormData[] {
  const stateLength = Object.keys(state).length;
  const arr = [];
  for (let i = 0; i < stateLength; i++) {
    const subArr: FormData = [i, Object.keys(state)[i], Object.values(state)[i]]
    arr.push(subArr);
  }
  return arr;
}
