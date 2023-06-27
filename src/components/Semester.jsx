import React from "react";

import { Link } from "react-router-dom";
import { BsArrowDownShort } from "react-icons/bs";

const Semester = ({ shift }) => {
  localStorage.setItem("shift", shift);
  return (
    <>
      <div className="space"></div>
      <div className="nav_display">
        <h1 className="head"><BsArrowDownShort />Select Semester<BsArrowDownShort /></h1>
        <Link to="/2nd-semester">
          <h3>2nd Semester</h3>
        </Link>
        <Link to="/4th-semester">
          <h3>4th Semester</h3>
        </Link>
        <Link to="/6th-semester">
          <h3>6th Semester</h3>
        </Link>
      </div>
      <div className="space"></div>
    </>
  );
};

export default Semester;
