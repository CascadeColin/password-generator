import Header from './components/header'
import PasswordGen from './components/passwordGen';

//TODO: updates:
// Styling!
// refactor App.tsx to take in a page in pages/ that renders components -> overkill for this project but good practice
// implement that a certain percentage of characters need to be of X type
// allow user to save password settings to localstorage
// make the form its own component

export default function App() {
  return (
    <>
      <Header/>
      <PasswordGen/>
    </>
  );
}