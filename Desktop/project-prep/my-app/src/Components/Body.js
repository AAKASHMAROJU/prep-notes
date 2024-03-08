import React from "react";
import Header from "./Header";
import "./Body.css";
import img1 from "./../Images/img1.jpg";
import img2 from "./../Images/img2.jpg";
import img3 from "./../Images/img3.jpg";
import Search from "./../Images/search.png";

function Body() {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="first">
          <div className="outer">
            <div className="text">
              <p className="heading">Study Smarter, not harder</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium est cupiditate, eligendi asperiores recusandae animi
                exc
              </p>
            </div>
            <div className="search-container">
              <span>
                <img src={Search} alt="search" id="search-img" />
              </span>
              <input
                type="text"
                id="search-text"
                placeholder="Search for notes, questions and more"
              />
              <button className="search-btn">Search</button>
            </div>
          </div>
        </div>
        <h1>Featured</h1>
        <div className="second">
          <div className="items">
            <img src={img1} alt="Image1" />
            <p>
              <a href="https://www.google.com" target="_blank">
                Latest Notes
              </a>{" "}
            </p>
          </div>
          <div className="items">
            <img src={img2} alt="Image2" />
            <p>
              <a href="https://www.google.com" target="_blank">
                Previous Year Questions
              </a>
            </p>
          </div>
          <div className="items">
            <img src={img3} alt="Image3" />
            <p>
              <a href="https://www.google.com" target="_blank">
                Study Resources
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
