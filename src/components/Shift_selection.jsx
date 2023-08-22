import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BsArrowDownShort } from "react-icons/bs";

const Shift_selection = ({ technology }) => {
  localStorage.setItem("tech", technology);
  const scroll = () => {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 10);
  };
  let tech = localStorage.getItem("tech");
  if (tech === "Tourism and Hospitality" || tech === "Mining & Mine Survey Technology") {
    return (
      <>
        <div className="space"></div>
  
        <div className="nav_display">
          <h1 className="head">
            <div>
              <BsArrowDownShort />
              Select Shift
              <BsArrowDownShort />
            </div>
          </h1>
          <Link onClick={scroll} to="1st-shift">
            <h3>First Shift</h3>
          </Link>
        </div>
        <Outlet />
        <div className="space"></div>
      </>
    );
  }else {
    return (
      <>
        <div className="space"></div>
  
        <div className="nav_display">
          <h1 className="head">
            <div>
              <BsArrowDownShort />
              Select Shift
              <BsArrowDownShort />
            </div>
          </h1>
          <Link onClick={scroll} to="1st-shift">
            <h3>First Shift</h3>
          </Link>
          <Link onClick={scroll} to="2nd-shift">
            <h3>Second Shift</h3>
          </Link>
        </div>
        <Outlet />
        <div className="space"></div>
      </>
    );
  }
};

export default Shift_selection;
