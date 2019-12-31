import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="Form">
        <h1>Form Elements</h1>
    <form>
        <label>Age Range</label><br />
        <input type="range" name="age" min="5" max="17"/><br />
        <label>Email Address</label><br />
        <input placeholder="Email" type="email" name="email" /><br />
        <label>Color Picker</label><br />  
    <input type="color" name="favcolor"/>
    <br />
        <label>Date</label><br />
        <input type="date" name="bday" /><br />
        <br />
        <label>Telephone</label><br />
        <input type="tel" name="usrtel" /><br />
        <br />
        <label>Time</label><br />
        <input type="time" name="usr_time" /><br />
        <br />
        <label>Url</label><br />
        <input type="url" name="homepage" /><br />

        <br />
        <label>Auto Complete</label><br />
        <input list="browsers" />
            <datalist id="browsers">
                <option value="Internet Explorer"/>
                <option value="Firefox" />
                <option value="Chrome" />
                <option value="Opera" />
                <option value="Safari" />
            </datalist>
         
    </form>
    </div>
  );
}

export default Form;