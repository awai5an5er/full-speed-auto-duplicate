import { NavBar } from "./NavBar";

function Header() {
  return (
    <header className="flex w-full justify-around p-7">
      <h1>Image</h1>
      <nav>
        <NavBar />
      </nav>
      <button>Click here</button>
    </header>
  );
}

export default Header;
