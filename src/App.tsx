import Header from './components/header'
import PasswordGen from './components/passwordGen';
import { settings } from './helpers/interfacesTypes'

export default function App() {
  return (
    <>
      <Header/>
      <PasswordGen settings={settings}/>
    </>
  );
}