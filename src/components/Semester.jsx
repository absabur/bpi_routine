import React, { useContext } from "react";

import { Link, Outlet } from "react-router-dom";
import { BsArrowDownShort } from "react-icons/bs";
import GlobalState from "../service/GlobalState";

const Semester = ({ shift }) => {
  const scroll = () => {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 10);
  };
  // localStorage.setItem("shift", shift);
  // let tech = localStorage.getItem("tech");

  const { tech, setShift } = useContext(GlobalState);
  if (shift) {
    setShift(shift)
  }else{
    setShift("")
  }

  if (tech === "Computer Science and Technology") {
    return (
      <>
        <div className="space"></div>
        <div className="nav_display">
          <h1 className="head">
            <div>
              <BsArrowDownShort />
              Select Semester
              <BsArrowDownShort />
            </div>
          </h1>
          <Link onClick={scroll} to="2nd-semester">
            <h3>2nd Semester</h3>
          </Link>
          <Link onClick={scroll} to="4th-semester">
            <h3>4th Semester</h3>
          </Link>
        </div>
        <Outlet />
        <div className="space"></div>
      </>
    );
  } else if (tech === "Computer Technology" || tech === "Mining & Mine Survey Technology" || tech==="Tourism and Hospitality") {
    return (
      <>
        <div className="space"></div>
        <div className="nav_display">
          <h1 className="head">
            <div>
            <BsArrowDownShort />
            Select Semester
            <BsArrowDownShort />
            </div>
          </h1>
          <Link onClick={scroll} to="6th-semester">
            <h3>6th Semester</h3>
          </Link>
        </div>
        <Outlet />
        <div className="space"></div>
      </>
    );
  } else {
    return (
      <>
        <div className="space"></div>
        <div className="nav_display">
          <h1 className="head">
            <div>
            <BsArrowDownShort />
            Select Semester
            <BsArrowDownShort />
            </div>
          </h1>
          <Link onClick={scroll} to="2nd-semester">
            <h3>2nd Semester</h3>
          </Link>
          <Link onClick={scroll} to="4th-semester">
            <h3>4th Semester</h3>
          </Link>
          <Link onClick={scroll} to="6th-semester">
            <h3>6th Semester</h3>
          </Link>
        </div>
        <Outlet />
        <div className="space"></div>
      </>
    );
  }
};

export default Semester;
