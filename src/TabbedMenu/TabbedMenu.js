import React from 'react';
import './TabbedMenu.css';

function TabbedMenu() {
  return (
    <div className="TabbedMenu">
        <button className="tab">Class Schedules</button>
        <button className="tab">Class Details</button>
      </div>
  );
}

export default TabbedMenu;