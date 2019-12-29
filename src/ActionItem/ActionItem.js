import React from 'react';
import './ActionItem.css';
import image from './close-up-of-apple-on-top-of-books.jpg';
function ActionItem() {
  return (
    <div className="ActionItem">
         <div className="item">
          <div className="item-box top">
             
          <img className="icon" width="125px" src={image} />
          <div className="wrapper">
              <h3 className="level">Level One</h3>
              <p className="age">5 - 7 years</p>
           </div>
     
          </div>
          <div className="item-box bottom">
               
               <p className="day">Saturday 3:30 PM</p>
         
                  <button className="cta">Enroll</button>
          
              </div>
              </div>
      </div>
  );
}

export default ActionItem;