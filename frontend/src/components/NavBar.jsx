import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-blue font-mono h-28 w-full">
      <ul className="flex justify-between items-center">
        <li className="flex items-center">
          <Link to="/">
            <img
              src="../src/assets/Images/logo-sds.png"
              alt="Logo for desktop"
              className="h-20 m-5 object-contain"
            />
          </Link>
        </li>
        <div className="flex justify-center w-screen font-sans text-almostWhite">
          <li>
            <Link to="/">
              <h1 className="md:text-6xl text-3xl">Tuum Vehiculum</h1>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
export default NavBar;
