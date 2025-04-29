import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My description",
  className = "bg-white text-black p-4",
  children
}) => (
  <div className="d-flex flex-column min-vh-100">
    <Menu />
    <div className="container-fluid flex-grow-1">
      <div className="text-dark text-center w-f">
        <h2 className="display-4 font-weight-bold">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    <footer className="footer bg-white mt-auto py-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left-aligned text */}
        <span className="text-muted">
          The <span className="text-black font-weight-bold">Blogus</span> Feel Free
        </span>
        {/* Right-aligned text and button */}
        <div className="d-flex align-items-center">
          <h4 style={{ fontSize: "20px" }} className="mb-0 mr-3">Got questions? Feel free to reach out!</h4>
          <button className="btn btn-dark btn-lg rounded-lg py-1">Contact Us</button>
        </div>
      </div>
    </footer>
  </div>
);

export default Base;
