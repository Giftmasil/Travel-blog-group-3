// sidebar.jsx

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleTagClick = (tag) => {
    navigate(`/tags?tag=${tag}`);
  };

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img
          src="https://images.unsplash.com/photo-1716384953735-be258c0aa9e4?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="about"
        />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis iusto voluptas voluptatem corrupti dignissimos nostrum, rem sed sit ex inventore, porro aliquam deserunt atque doloremque pariatur consequuntur quasi veniam voluptatum.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {["Destination", "Travel Tips", "Activities", "Adventure", "Relaxation", "Cultural"].map((tag) => (
            <li
              key={tag}
              className="sidebarListItem"
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
      </div>
      <div className="sidebarSocial">
        <a href="https://www.facebook.com/TheDummyPage/"><i className="topIcon fab fa-facebook-square"></i></a>
        <a href="https://www.instagram.com/_mas.ila_/"><i className="topIcon fab fa-instagram-square"></i></a>
        <a href="https://www.pinterest.com/fakepinterest/"><i className="topIcon fab fa-pinterest-square"></i></a>
        <a href="https://twitter.com/_muuo11_"><i className="topIcon fab fa-twitter-square"></i></a>
      </div>
      <div className="Contact"><Link className="link" to="/contact">Contact us</Link></div>
    </div>
  );
}
