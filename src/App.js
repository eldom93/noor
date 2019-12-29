import React from "react";
//import logo from './logo.svg';
import "./App.css";

import Content from "./Content/Content";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
/*import Home from './Home/Home';
import Class from './Class/Class';
import NewsEvents from './NewsEvents/NewsEvents';
import ContactUs from './ContactUs/ContactUs';
import About from './About/About';
*/
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="list">
            <li className="logo">
              <Link to="/">Logo</Link>
            </li>
            <li className="list-item">
              <Link className="menu-link" to="/classes">
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
          </ul>
        </nav>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/class">
            <Class />
          </Route>
          <Route path="/news-and-events">
            <NewsEvents />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Class() {
  return <h2>Classes</h2>;
}

function NewsEvents() {
  return <h2>News and Events</h2>;
}

function ContactUs() {
  return <h2>Contact Us</h2>;
}

export default App;
