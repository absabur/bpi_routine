import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BsArrowDownShort } from "react-icons/bs";

const Shift_selection = ({technology}) => {
  localStorage.setItem('tech',technology)
  return (
    <>
      <div className="space"></div>
      
      <div className="nav_dis">
      <h1 className="head"><BsArrowDownShort />Select Shift<BsArrowDownShort /></h1>
        <Link to="1st-shift"><h3>First Shift</h3></Link>
        <Link to="2nd-shift"><h3>Second Shift</h3></Link>
      </div>
      <Outlet />
      <div className="space"></div>
    </>
  );
};

export default Shift_selection;
