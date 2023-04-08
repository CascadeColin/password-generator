import { headerStyle } from "../styles/headerStyle";

export default function Header() {
  return (
    <>
      <h1 className={headerStyle.header}>
        Password Generator
      </h1>
      <h2 className={headerStyle.subHeader}>by Colin Marshall</h2>
    </>
  );
}
