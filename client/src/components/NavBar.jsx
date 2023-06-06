import React, { useState } from "react";
import "./NavBar.css";
import { TfiMenu } from "react-icons/tfi";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleClick() {
    setIsNavOpen(!isNavOpen);
  }
  return (
    <div className="navbar">
      <div className="navbar__logoContainer">
        <a src="/">
          <img
            id="navbar__logoContainer--logoImg"
            alt="navbar__logo"
            src="http://www.pngimagesfree.com/LOGO/M/Makemytrip/Make-My-Trip-Logo-PNG.png"
          />
        </a>
      </div>
      <div className="navbar__menu">
        <ul>
          <li>
            <a href="#" className="navbar__menu--links">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="navbar__menu--links">
              Stays
            </a>
          </li>
          <li>
            <a href="#" className="navbar__menu--links">
              Flights
            </a>
          </li>
          <li>
            <a href="#" className="navbar__menu--links">
              Car rentals
            </a>
          </li>
        </ul>
        <div className="navbar__btnContainer">
          <button className="navbar__btnContainer--btn">Register</button>
          <button className="navbar__btnContainer--btn">Sign in</button>
        </div>
      </div>

      <div className="navbar__dropdownMenu">
        <button id="navbar__dropdownMenu--btn" onClick={handleClick}>
          <TfiMenu />
        </button>
      </div>

      {isNavOpen && (
        <div className="dropdownContainer">
          <ul>
            <li>
              <a href="#" className="dropdownContainer--links">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="dropdownContainer--links">
                Stays
              </a>
            </li>
            <li>
              <a href="#" className="dropdownContainer--links">
                Flights
              </a>
            </li>
            <li>
              <a href="#" className="dropdownContainer--links">
                Car rentals
              </a>
            </li>
          </ul>
          <div className="dropdownContainer__btnContainer">
            <button className="navbar__btnContainer--btn">Register</button>
            <button className="navbar__btnContainer--btn">Sign in</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
