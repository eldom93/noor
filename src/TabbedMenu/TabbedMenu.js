import React from "react";
import "./TabbedMenu.css";
class TabbedMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "Class Schedules",
      className: "menu-item-button active"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="TabbedMenu">
        <div className="menu-bar">
          <button
            id="Schedules"
            className={this.state.className}
            onClick={this.handleClick}
          >
            Class Schedules
          </button>
          <button
            id="Details"
            className={this.state.className}
            onClick={this.handleClick}
          >
            Class Details
          </button>
        </div>
        <p>{this.state.content}</p>
      </div>
    );
  }

  handleClick(e) {
    e.preventDefault();
    if (!this.state.content.length) {
      return console.log(this.state.content.length);
    }
    const newTab = {
      content: this.state.content,
      className: this.state.className
    };
    this.setState(state => ({
      content: state.content.replace(this.state.content, newTab),
      className: this.state.className.replace("active", " ")
    }));
  }
}

export default TabbedMenu;
