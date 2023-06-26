import React from "react";
import { Link } from "react-router-dom";

const Shift_selection = ({technology}) => {
  localStorage.setItem('tech',technology)
  return (
    <>
      <div className="space"></div>
      
      <div className="nav_display">
      <h1 className="head">Select Shift</h1>
        <Link to="/1st-shift"><h3>First Shift</h3></Link>
        <Link to="/2nd-shift"><h3>Second Shift</h3></Link>
      </div>
      <div className="space"></div>
    </>
  );
};

export default Shift_selection;
