import React from "react";
import "./Featured.scss";
const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Elevate Your Vision, I Create Your Mission: <i>Freelance</i> Excellence
            Unleashed!
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder="Search for any service..." />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
          <span>Popular:</span>
          <button>Web Design</button>
          <button>Wordpress</button>
          <button>Logo Design</button>
          <button>Web Design</button>

          </div>
        </div>
        <div className="right">
        <img src="./img/woman.png" alt=""/></div>
      </div>
    </div>
  );
};

export default Featured;
