import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div className="NavBar">
  <button className="hamburger hamburger--slider" type="button">
  <span className="hamburger-box">
    <span className="hamburger-inner"></span>
  </span>
</button>  
      <ul className="list">
      <li className="logo">
          <a className="menu-link" href="/">
            Logo
          </a>
        </li>
        <li className="list-item">
          <a className="menu-link" href="/">
            About Us
          </a>
        </li>
        <li className="list-item">
          <a className="menu-link" href="/">
            Contact Us
          </a>
        </li>

        <li className="list-item">
          <a className="menu-link" href="/">
            News and Events
          </a>
        </li>

        <li className="list-item">
          <a className="menu-link" href="/">
            Classes
          </a>
        </li>
  
      </ul>
    
    </div>
  );
}

export default NavBar;