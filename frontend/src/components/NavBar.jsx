import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.scss";

function NavBar() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => setShowLinks(!showLinks);
  const handleCloseNavbar = () => setShowLinks(false);
  return (
    <div className={styles["block-nav"]}>
      <div className={styles["logo-mobile"]}>
        <Link to="/" onClick={handleCloseNavbar}>
          <img
            className={styles["img-logo-mobile"]}
            src= "../src/assets/Images/logo-sleepy-dev-squad.png"
            alt="Logo for mobile"
          />
        </Link>
      </div>
      <nav
        className={`${styles.navbar} ${
          showLinks ? styles["show-nav"] : styles["hide-nav"]
        }`}
      >
        <ul className={styles["nav-links"]}>
          <li className={styles["nav-li logo-desk"]}>
            <Link
              className={styles["nav-link"]}
              to="/"
              onClick={handleShowLinks}
            >
              <img
                className={styles["img-logo-desk"]}
                src="../src/assets/Images/logo-sleepy-dev-squad.png"
                alt="Logo for desktop"
              />
            </Link>
          </li>
          <li className={styles["nav-li"]}>
            <Link
              className={styles["nav-link"]}
              to="/informations"
              onClick={handleShowLinks}
            >
              <h1>Informations</h1>
            </Link>
          </li>
          <li className={styles["nav-li"]}>
            <Link
              className={styles["nav-link"]}
              to="/Page3"
              onClick={handleShowLinks}
            >
              <h1>Page 3</h1>
            </Link>
          </li>
          <li className={styles["nav-li"]}>
            <Link
              className={styles["nav-link"]}
              to="/Page4"
              onClick={handleShowLinks}
            >
              <h1>Page 4</h1>
            </Link>
          </li>
          <li className={styles["nav-li"]}>
            <Link
              className={styles["nav-link"]}
              to="/Page5"
              onClick={handleShowLinks}
            >
              <h1>Page 5</h1>
            </Link>
          </li>
          <li className={styles["nav-li"]}>
            <Link
              className={styles["nav-link"]}
              to="/Page6"
              onClick={handleShowLinks}
            >
              <h1>Page 6</h1>
            </Link>
          </li>
          <li className={styles["nav-li"]}>
            <Link
              className={styles["nav-link"]}
              to="/Page7"
              onClick={handleShowLinks}
            >
                <h1>Page 7</h1>
            </Link>
          </li>
        </ul>
        <button
          className={styles["nav-burger"]}
          type="button"
          onClick={handleShowLinks}
        >
          <span className={styles.burgerBar} />
        </button>
      </nav>
    </div>
  );
}
export default NavBar;
