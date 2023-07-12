import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => setShowLinks(!showLinks);
  // const handleCloseNavbar = () => setShowLinks(false);
  return (
    <nav className="bg-gray-500 font-mono">
      <ul className="flex justify-between items-center">
        <li>
          <Link to="/" onClick={handleShowLinks}>
            <img
              className={styles["img-logo-desk"]}
              src="../src/assets/Images/logo-sleepy-dev-squad.png"
              alt="Logo for desktop"
            />
          </Link>
        </li>
        <div className="flex justify-between w-4/12 mr-12">
          <li>
            <Link to="/informations" onClick={handleShowLinks}>
              <h1>Informations</h1>
            </Link>
          </li>
          <li>
            <Link to="/Page3" onClick={handleShowLinks}>
              <h1>Page 3</h1>
            </Link>
          </li>
          <li>
            <Link to="/Page4" onClick={handleShowLinks}>
              <h1>Page 4</h1>
            </Link>
          </li>
          <li>
            <Link to="/Page5" onClick={handleShowLinks}>
              <h1>Page 5</h1>
            </Link>
          </li>
          <li>
            <Link to="/Page6" onClick={handleShowLinks}>
              <h1>Page 6</h1>
            </Link>
          </li>
          <li>
            <Link to="/Page7" onClick={handleShowLinks}>
              <h1>Page 7</h1>
            </Link>
          </li>
        </div>
      </ul>
      <button type="button" onClick={handleShowLinks}></button>
    </nav>
  );
}
export default NavBar;
