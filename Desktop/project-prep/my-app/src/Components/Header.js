import "./Header.css";
import Book from "./../Images/books.png";

import "font-awesome/css/font-awesome.min.css";
const Header = () => {
  return (
    <>
      <div className="nav-bar">
        <span className="nav-icon">
          <p>
            <img src={Book} alt="book-icon" id="book-icon" />
            Prep Notes
          </p>
        </span>
        <ul>
          <li>Study</li>
          <li>Notes</li>
          <li>Q&A</li>
          <li>Courses</li>
          <li>Explore</li>
          <li>
            <a href="https://www.google.com" target="_blank">
              Sign-Up
            </a>
          </li>
          <li>
            <i className="fa fa-solid fa-user"></i>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Header;
