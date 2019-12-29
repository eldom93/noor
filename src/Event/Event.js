import React from 'react';
import './Event.css';
import image from './close-up-of-apple-on-top-of-books.jpg';
function Event() {
    return (
        <div className="Events">
            <span className="triangle">&#9720;</span>
            <p className="event-date">11/30/2019</p>
            <p className="time">5:30 PM</p>
            <img className="image" width="350px" src={image} />
            <path d="M 175 200 l 150 0" stroke="green" stroke-width="3"
  fill="green" />
            <div className="description">
                <p>Lorum IpsumSearch No More here at Al Noor School </p>
            </div>
        </div>
    );
}

export default Event;