import React from 'react';
import './News.css';
import image from './close-up-of-apple-on-top-of-books.jpg';
function News() {
  return (
    <div className="News">
        <div className="news-box">
            <img width="150px" src={image} />
            <div className="container">
                <h3 className="date">11/25/2019</h3>
                <p className="description">Search No More here at Al Noor School We provide</p>
            </div>  
        </div>
        <div className="news-box">
            <img width="150px" src={image} />
            <div className="container">
                <h3 className="date">11/25/2019</h3>
                <p className="description">Search No More here at Al Noor School We provide</p>
            </div>  
        </div>
        <div className="news-box">
            <img width="150px" src={image} />
            <div className="container">
            <h3 className="date">11/25/2019</h3>
            <p className="description">Search No More here at Al Noor School We provide</p>
            </div>
        </div>
    </div>
  );
}

export default News;