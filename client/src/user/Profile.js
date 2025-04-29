import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import { getUserBlog } from "./helper/userapicalls";
import Card from "../core/Card";

const Profile = () => {
  const [blogs, setBlogs] = useState([]);

  const { user, token } = isAutheticated();

  const preload = (userId) => {
    getUserBlog(userId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setBlogs(data);
      }
    });
  };

  useEffect(() => {
    preload(user._id);
  }, []);

  return (
    <Base
      title="Welcome to Profile"
      description="Manage all of your Information here"
      className="container p-2"
    >
      <div className="container text-left">
        <div className="row">
          <div className="col-12">
            <div className="card mb-4">
              <h4 className="card-header">Your Info</h4>
              <ul className="list-group">
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-sm-4">
                      <span className="badge badge-primary mr-2">Name:</span>
                    </div>
                    <div className="col-sm-8">{user.name}</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-sm-4">
                      <span className="badge badge-primary mr-2">Email:</span>
                    </div>
                    <div className="col-sm-8">{user.email}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12">
            <div className="card">
              <h4 className="card-header">Your Blogs</h4>
              <div className="container">
                <div className="row text-center">
                  {blogs.map((blog, index) => {
                    return (
                      <div key={index} className="col-md-4 p-2">
                        <Card blog={blog} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card mt-4">
              <h4 className="card-header">Operations</h4>
              <div className="card-body">
                <Link className="btn btn-dark rounded-lg" to={`/user/manageblogs/${user._id}`}>
                  <span className="">Manage Blogs</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Profile;
