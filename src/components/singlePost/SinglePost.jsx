import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./singlepost.css";

export default function SinglePost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  const post = posts.find((post) => post.id === id);

  const handleDelete = () => {
    const updatedPosts = posts.filter((p) => p.id !== id);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    navigate("/");
  };

  if (!post) {
    return <div className="postNotFound">Post not found</div>;
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={post.image} alt="post" />
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <Link to={`/write/${id}`} className="singlePostIconLink">
              <i className="singlePostIcon far fa-edit"></i>
            </Link>
            <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          {post.tags.split(/[, ]+/).map((tag, index) => (
            <span key={index} className="singlePostCat">{tag}</span>
          ))}
          <span className="singlePostDate">{new Date(post.date).toLocaleString()}</span>
        </div>
        <p className="singlePostDesc">{post.description}</p>
      </div>
    </div>
  );
}

