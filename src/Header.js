import React from "react";

function Header() {
  return (
    <header>
      <nav>
        <img className="icon" src="./logo512.png" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
