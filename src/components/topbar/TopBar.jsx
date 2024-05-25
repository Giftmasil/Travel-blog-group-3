// topbar.jsx
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./topbar.css";
import { getCurrentUser, clearCurrentUser } from "../../utils/storage";

export default function Topbar() {
  const user = getCurrentUser();
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    } else {
      navigate("/");
    }
  };

  const handleLogout = () => {
    // Clear current user from local storage
    clearCurrentUser();
    // Navigate to home page after logout
    navigate("/login");
  };

  return (
    <div className="top">
      <div className="topLeft">
        <a href="https://www.facebook.com/TheDummyPage/"><i className="topIcon fab fa-facebook-square"></i></a>
        <a href="https://www.instagram.com/_mas.ila_/"><i className="topIcon fab fa-instagram-square"></i></a>
        <a href="https://www.pinterest.com/fakepinterest/"><i className="topIcon fab fa-pinterest-square"></i></a>
        <a href="https://twitter.com/_muuo11_"><i className="topIcon fab fa-twitter-square"></i></a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/" >
              HOME
            </Link>
          </li>
          <li className="topListItem"><Link className="link" to="/about" >
              ABOUT
            </Link></li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              POST
            </Link>
          </li>
          {user && <li className="topListItem" onClick={handleLogout}>LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <div className="topRight">
            <Link className="link" to="/settings">
              <img
                className="topImg"
                src={user.profile || "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
                alt="user"
              />
            </Link>
          </div>
        ) : (
          currentPath !== "/login" &&
          currentPath !== "/register" && (
            <div className="topRight">
              <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/login">
                    LOGIN
                  </Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/register">
                    REGISTER
                  </Link>
                </li>
              </ul>
            </div>
          )
        )}
        <form className="Search" onSubmit={handleSearch}>
          <i className="topSearchIcon fas fa-search"></i>
          <input
            className="searchInput"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
          />
        </form>
      </div>
    </div>
  );
}
