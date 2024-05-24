// write.jsx

import React, { useState } from "react";
import "./write.css";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

export default function Write() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    id: nanoid(),
    image: "",
    tags: "",
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Include current date
    const newPost = { ...post, date: new Date().toISOString() };
    // Save post data to local storage
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    localStorage.setItem("posts", JSON.stringify([...posts, newPost]));
    // Clear form fields after submission
    setPost({
      id: nanoid(),
      image: "",
      tags: "",
      title: "",
      description: "",
    });
    navigate("/")
  };

  return (
    <div className="write">
      <img
        className="writeImg"
        src={post.image || "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
        alt="user"
      />
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <input
            type="text"
            id="image"
            name="image"
            className="writeInput"
            placeholder="Enter image URL"
            value={post.image}
            onChange={handleChange}
          />
        </div>
        <div className="writeFormGroup">
          <input
            type="text"
            id="tags"
            name="tags"
            className="writeInput"
            placeholder="Enter tags"
            value={post.tags}
            onChange={handleChange}
          />
        </div>
        <div className="writeFormGroup">
          <input
            type="text"
            id="title"
            name="title"
            className="writeInput"
            placeholder="Enter title"
            value={post.title}
            onChange={handleChange}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            id="description"
            name="description"
            className="writeInput writeText"
            placeholder="Write your post..."
            value={post.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
