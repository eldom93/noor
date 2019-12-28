import React from "react";
import "./TabbedMenu.css";


function TabbedMenu() {
  function handleClick(e) {
    e.preventDefault();
    var toggle = document.getElementsByTagName("BUTTON");
  //toggle[4].className = !toggle[5].className
    document.getElementsByTagName("BUTTON")[5].className = 'menu-item-button' ? document.getElementsByTagName("BUTTON")[5].className.replace('menu-item-button', 'active') && document.getElementsByTagName("BUTTON")[4].className.replace('active','menu-item-button') : document.getElementsByTagName("BUTTON")[5].className.replace('active', 'menu-item-button') && document.getElementsByTagName("BUTTON")[4].className.replace('menu-item-button', 'active');

    document.getElementsByTagName("BUTTON")[4].className = 'menu-item-button' ? document.getElementsByTagName("BUTTON")[5].className.replace('menu-item-button', 'active') && document.getElementsByTagName("BUTTON")[5].className.replace('active', 'menu-item-button') : document.getElementsByTagName("BUTTON")[4].className.replace('active', 'menu-item-button') && document.getElementsByTagName("BUTTON")[5].className.replace('menu-item-button','active');
    //active.className = active.className.remove('active');
    //inactive = inactive.add('active');

  }
  return (
    <div className="TabbedMenu">

<div className="menu-bar">
  <button id="Schedules" className="active" onClick={handleClick}>Class Schedules</button>
  <button id="Details" className="menu-item-button" onClick={handleClick}>Class Details</button>
</div>

      <div id="Schedules" className="">
        <h2>Class Schedules</h2>
        <p>Class Schedules Content</p>
      </div>

      <div id="Details" className="">
        <h2>Class Details</h2>
        <p>Class Details Content</p>
      </div>
    </div>
  );
}

export default TabbedMenu;
