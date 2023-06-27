import React from "react";

import { Link } from "react-router-dom";

const Technology = () => {
  return (
    <>
      <div className="nav_display">
        <h1 className="head">Select Your Technology</h1>
        <Link to="cst">
          <h3>Computer Science and Technology</h3>
        </Link>
        <Link to="/et">
          <h3>Electrical Technology</h3>
        </Link>
        <Link to="/cmt">
          <h3>Computer Technology</h3>
        </Link>
        <Link to="/ct">
          <h3>Civil Technology</h3>
        </Link>
        <Link to="/mt">
          <h3>Mechanical Technology</h3>
        </Link>
        <Link to="/pt">
          <h3>Power Technology</h3>
        </Link>
        <Link to="/rac">
          <h3>Refrigeration & Air Conditioning Technology</h3>
        </Link>
        <Link to="/ent">
          <h3>Electronics Technology</h3>
        </Link>
        <Link to="/mnt">
          <h3>Mining Technology</h3>
        </Link>
        <Link to="/th">
          <h3>Tourism and Hospitality</h3>
        </Link>
      </div>
    </>
  );
};

export default Technology;
