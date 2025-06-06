import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";
import { getBlogs } from "./helper/coreapicalls";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(false);

  // Sort blogs by creation date in descending order
  const loadAllBlogs = () => {
    getBlogs().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        // Sort blogs by createdAt in descending order
        const sortedBlogs = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setBlogs(sortedBlogs);
      }
    });
  };

  useEffect(() => {
    loadAllBlogs();
  }, []);

  return (
    <Base title="BlogUs" description="Welcome to BlogUs">
      <div className="container">
        <div className="row text-center">
          {blogs.map((blog, index) => {
            return (
              <div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                <Card blog={blog} />
              </div>
            );
          })}
        </div>
      </div>

    </Base>
  );
}
