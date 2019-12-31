import React from 'react';
import './NavBar.css';
import { BrowserRouter as Router, Link} from "react-router-dom";
function NavBar() {
  return (
    <div className="NavBar">
      <Router>
<header>
  <button className="hamburger hamburger--slider" type="button">
  <span className="hamburger-box">
    <span className="hamburger-inner"></span>
  </span>
</button>  
 </header>

 <nav>
          <ul className="list">
            <li className="logo">
              <Link to="/">Logo</Link>
            </li>
            <li className="list-item">
              <Link className="menu-link" to="/class">
                Classes
              </Link>
            </li>
            <li className="list-item">
              <Link className="menu-link" to="/news-and-events">
                News and Events
              </Link>
            </li>
            <li className="list-item">
              <Link className="menu-link" to="/contact-us">
                Contact Us
              </Link>
            </li>
            <li className="list-item">
              <Link className="menu-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="list-item">
              <Link to="/topics">
               Topics
              </Link>
            </li>
          </ul>
        </nav>
        </Router>
    </div>
  );
}

export default NavBar;