import Header from './components/header'
import PasswordGen from './components/passwordGen';

//TODO: updates:
// 1) password must start with a letter
// 2) allow user to specify amount of each character set
// 3) user MUST check at least 1 character set
// 4) Change input range to text and add guardrails for 8-64 length?
// 5) Styling!
// 6) refactor generator.ts (and change name?)
// 7) refactor App.tsx to take in a page in pages/ that renders components -> overkill for this project but good practice

export default function App() {
  return (
    <>
      <Header/>
      <PasswordGen/>
    </>
  );
}