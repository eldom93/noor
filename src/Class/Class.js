import React from "react";
import "./Class.css";
import TabbedMenu from '../TabbedMenu/TabbedMenu';
import Actionitem from '../ActionItem/ActionItem';
function Class() {
  return (
    <div className="Class">
      <h1>Class</h1>
      <TabbedMenu/>
<Actionitem />
<Actionitem />
<Actionitem />
    </div>
  );
}

export default Class;