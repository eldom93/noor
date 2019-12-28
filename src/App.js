import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Card from './Card/Card';
import TabbedMenu from './TabbedMenu/TabbedMenu';
import NavBar from './NavBar/NavBar';
function App() {
  return (
    <div className="App">
<NavBar />
<br /><br /><br /> <br />
        <Card />
<TabbedMenu />
 
    </div>
  );
}

export default App;
