import { Words } from "./words";

const NavLinks = () => (
  <ul>
    {Words.Navbar.map((li) => (
      <li key={li}>{li}</li>
    ))}
  </ul>
);

export default NavLinks;
