import React from 'react';
import './News.css';
import image from './close-up-of-apple-on-top-of-books.jpg';
function News() {
  return (
    <div className="News">
        <div className="news-box">
            <img width="300px" src={image} />
            <h2 className="date">11/25/2019</h2>
            <p className="description">Search No More here at Al Noor School We provide</p>
        </div>
        <div className="news-box">
            <img width="300px" src={image} />
            <h2 className="date">11/25/2019</h2>
            <p className="description">Search No More here at Al Noor School We provide</p>
        </div>
        <div className="news-box">
            <img width="300px" src={image} />
            <h2 className="date">11/25/2019</h2>
            <p className="description">Search No More here at Al Noor School We provide</p>
        </div>
    </div>
  );
}

export default News;