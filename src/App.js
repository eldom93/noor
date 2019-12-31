import React from "react";
import "./App.css";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";

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
            <li className="list-item">
              <Link to="/classes">
               Classes
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
        <Route path="/classes">
            <Classes />
          </Route>
        <Route path="/about">
            <About />
          </Route>
          <Route path="/classes">
            <Classes />
          </Route>
          <Route path="/news-and-events">
            <NewsEvents />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/">
            <Home />
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

function NewsEvents() {
  return <h2>News and Events</h2>;
}

function ContactUs() {
  return <h2>Contact Us</h2>;
}

function Classes() {
  let match = useRouteMatch();

  return (
    <section>
      <h2>Class Schedules</h2>
      <form action="example.php">
      <label>Age Range</label><br />
        <input type="range" name="age" min="5" max="17"/><br />
        </form>
      <ul>
        <li>
          <Link to={`${match.url}/class-subject`}>Class Subject</Link>
        </li>
        <li>
          <Link to={`${match.url}/age-group`}>
            Age Group
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:classId`}>
          <Class />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </section>
  );
}

function Class() {
  let { classId } = useParams();
  return <h3>Requested topic ID: { classId }</h3>;
}

export default App;
