import React from "react";
import { Link } from "react-router-dom";
import { API } from "../backend";

const Card = ({ blog }) => {
  const blogvTitle = blog ? blog.title : "A photo from pexels";
  const blogvDescrption = blog ? blog.body : "Default description";
  const blogvAuthor = blog.author ? blog.author : "Anonymous";
  const MAX_LENGTH = 100; // Adjusted for responsive content
  const imageurl = blog
    ? `${API}/blog/photo/${blog._id}`
    : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;

  return (
    <div className="card text-white bg-white text-left shadow h-100 d-flex flex-column">
      <div className="card-img-container">
        <img
          className="card-img-top"
          src={imageurl}
          alt="photo"
        />
      </div>
      <div className="card-body flex-grow-1">
        <h5 className="card-title text-dark text-truncate">{blogvTitle}</h5>
        <p className="card-text text-dark text-wrap">
          {blogvDescrption.length > MAX_LENGTH
            ? `${blogvDescrption.substring(0, MAX_LENGTH)}...`
            : blogvDescrption}
        </p>
      </div>
      <div className="card-footer bg-transparent border-0 d-flex flex-column align-items-start">
        <p className="card-text text-dark mb-2">
          <small className="text-muted">Author: {blogvAuthor}</small>
        </p>
        <Link className="btn btn-dark rounded" to={`/blogv/${blog._id}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
