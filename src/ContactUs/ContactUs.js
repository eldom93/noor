import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (

<html>
<head>
  <link rel="stylesheet" href="css/style.css" type="text/css"></link>
  <title>Contact Us</title>
</head>
<body>
  <div id="container" className="Home">
 <nav>
      <ul className="list">
        <li className="list-item">
          <a className="menu-link" href="index.html" id="logo">
            Logo
          </a>
        </li>
        <li className="list-item">
          <a className="menu-link" href="class.html">
            Classes
          </a>
        </li>
        <li className="list-item">
          <a className="menu-link" href="news-and-events.html">
            News and Events
          </a>
        </li>
        <li className="list-item">
          <a className="menu-link" href="contact-us.html">
            Contact Us
          </a>
        </li>
        <li className="list-item">
          <a className="menu-link" href="about.html">
            About Us
          </a>
        </li>
        <li className="list-item">
          <a className="menu-link" href="topics.html">
            Topics
          </a>
        </li>
      </ul>
    </nav>
    <header>
      <h1>Contact Us</h1>
      <h2>Send us an email, follow us on social media or call us.</h2>
    </header>
    <nav>
      <h3>Contact Us</h3>
      <ul className="list">
        <li className="list-item">
          <a className="menu-link" href="class.html">
            Class Schedules
          </a>
        </li>
        <li className="list-item">
          <a className="menu-link" href="class.html">
            Class Details
          </a>
        </li>
      </ul>
    </nav>

    <section className="contact-us">
    
    </section>

    <div className="clear"></div>

    <footer>Copyright 2020 Nyera Eldomiaty</footer>

  </div>
</body>
</html>
);
};

export default ContactUs;