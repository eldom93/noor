import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Card from './Card/Card';
import TabbedMenu from './TabbedMenu/TabbedMenu';
import NavBar from './NavBar/NavBar';
import News from './News/News';
import Event from './Event/Event';
function App() {
  return (
    <div className="App">
<NavBar />
<br /><br /><br /> <br />
        <Card />
        <br /><br /><br /> <br />
<TabbedMenu />
<br /><br /><br /> <br />
<News />
<br /><br /><br /> <br />
<Event />
    </div>
  );
}

export default App;
