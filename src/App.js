import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Card from "./Card/Card";
import NavBar from "./NavBar/NavBar";
import Hero from "./Hero/Hero";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Card />
    </div>
  );
}

export default App;
