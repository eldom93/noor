import React from 'react';
import './card.css';
import image from './close-up-of-apple-on-top-of-books.jpg';
function Card() {
  return (
    <div className="Card">
          <div className="box">
              <h2 className="title">Are you tired of searching for the best saturday school?</h2>
              <img width="300px" src={image} />
              <p className="description">Search No More here at Al Noor School We provide</p>
              <button className="cta">Learn More</button>
          </div>
          <div className="box">
              <h2 className="title">Are you tired of searching for the best saturday school?</h2>
              <img width="300px" src={image} />
              <p className="description">Search No More here at Al Noor School We provide</p>
              <button className="cta">Learn More</button>
          </div>
          <div className="box">
              <h2 className="title">Are you tired of searching for the best saturday school?</h2>
              <img width="300px" src={image} />
              <p className="description">Search No More here at Al Noor School We provide  </p>   
              <button className="cta">Learn More</button>
      
          </div>
      </div>
  );
}

export default Card;