import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../assets/images/ShutterbugsLogo.png';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <header className={color ? "header header-background" : "header"}>
      <div className="logo-wrapper">
        <NavLink to="/" className="nav-link">
          <img src={logo} alt="Shutterbugs Logo" />
        </NavLink>
      </div>
      <nav className="navbar">
        <ul>
          <NavLink to="/about" className="nav-link">
            <li>About</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
