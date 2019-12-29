import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Content from "./Content/Content";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import Home from './Home/Home';
import NewsEvents from './NewsEvents/NewsEvents';
import ContactUs from './ContactUs/ContactUs';
import About from './About/About';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/">
          <Home />
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
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
