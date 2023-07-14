import React from "react";
import './error.css'
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div
      style={{ padding: "2rem 0.3rem", paddingBottom: "2rem" , backgroundColor:"#416475"}}
    >
      <h1>404 Error Page, page not found</h1>
        <section className="error-container">
          <span>4</span>
          <span><span className="screen-reader-text">0</span></span>
          <span>4</span>
        </section>
        <div className="link-container">
          <Link className="home-link" to="/">Go to Home Page</Link>
        </div>
      </div>
  );
};

export default Error;