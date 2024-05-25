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

  const handleTagClick = (tag) => {
    navigate(`/tags?tag=${tag}`);
  };

  const handleLogout = () => {
    clearCurrentUser();
    navigate("/login");
  };

  return (
    <div className="top">
      <div className="topMostListContainer">
        <ul className="topMostList">
          <li className="topTitle font">Discover Travels</li>
          <div className="topRight">
            {user ? (
              <>
                <Link className="link" to="/settings">
                  <img
                    className="topImg"
                    src={user.profile || "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
                    alt="user"
                  />
                </Link>
                <form className="Search smallSearch" onSubmit={handleSearch}>
                <button type="submit" className="searchButton">
                <i className="topSearchIcon color fas fa-search"></i>
                </button>
                <input
                  className="searchInput"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                />
          </form>
                <li className="topListItem logOut" onClick={handleLogout}>LOGOUT</li>
              </>
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
          </div>
        </ul>
      </div>
      <div className="topNavigation">
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
                ALL
              </Link>
            </li>
            {["Destination", "Travel Tips", "Activities"].map((tag) => (
            <li
              key={tag}
              className="topListItem"
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </li>
          ))}
            <li className="topListItem">
              <Link className="link" to="/write">
                CREATE
              </Link>
            </li>
          </ul>
        </div>
        <div className="topRight">
          <form className="Search bigSearch" onSubmit={handleSearch}>
            <button type="submit" className="searchButton">
              <i className="topSearchIcon fas fa-search"></i>
            </button>
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
    </div>
  );
}
