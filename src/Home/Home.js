import React from "react";
import "./Home.css";


function Home() {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="css/style.css" type="text/css"></link>
        <title>Home</title>
      </head>
      <body>
        <div id="container" className="Home">

          <header>
            <h1>Home Page</h1>
            <h2>Content</h2>
          </header>

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

          <nav>
            <h3>Classes</h3>
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

          <section className="home">
          
          </section>

          <div className="clear"></div>

          <footer>Copyright 2020 Nyera Eldomiaty</footer>

        </div>
      </body>
    </html>
  );
}

export default Home;