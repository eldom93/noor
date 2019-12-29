import React from "react";
import "./TabbedMenu.css";
class TabbedMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '', content: 'Class Schedules', className: 'menu-item-button active' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="TabbedMenu">
       
<div className="menu-bar">
  <button id="Schedules" className={this.state.className} onClick={this.handleClick}>Class Schedules</button>
  <button id="Details" className={this.state.className} onClick={this.handleClick}>Class Details</button>
</div>
<p>{this.state.content}</p>

        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
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
      className: this.state.className.replace('active', ' ')
    }));
  
  }


  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
   

      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
 
    );
  }
}export default TabbedMenu;

/*
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

export default TabbedMenu;*/
