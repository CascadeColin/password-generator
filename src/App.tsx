import Header from './components/header'
import PasswordGen from './components/passwordGen';

//TODO: updates:
// refactor generator.ts (and change name?)
// Styling!
// refactor App.tsx to take in a page in pages/ that renders components -> overkill for this project but good practice

export default function App() {
  return (
    <>
      <Header/>
      <PasswordGen/>
    </>
  );
}