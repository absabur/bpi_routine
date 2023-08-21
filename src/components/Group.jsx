// @ts-nocheck
import React from "react";

import { Link, Outlet } from "react-router-dom";
import { BsArrowDownShort } from "react-icons/bs";
import RenderRoutine from "../Routines/RenderRoutine";

const Group = ({ semester }) => {
  const scroll = () => {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight - 850);
    }, 10);
  };
  localStorage.setItem("sem", semester);
  let tech = localStorage.getItem("tech");
  let sem = localStorage.getItem("sem");

  if (
    (tech === "Mechanical Technology" && sem === "2nd") ||
    (tech === "Mechanical Technology" && sem === "4th") ||
    (tech === "Electrical Technology" && sem === "2nd") ||
    (tech === "Electrical Technology" && sem === "4th")
  ) {
    return (
      <>
        <div className="space"></div>
        <div className="nav_display">
          <h1 className="head">
            <div>
              <BsArrowDownShort />
              Select Group
              <BsArrowDownShort />
            </div>
          </h1>

          <Link onClick={scroll} to="group-a">
            <h3>Group A</h3>
          </Link>
          <Link onClick={scroll} to="group-b">
            <h3>Group B</h3>
          </Link>
          <Link onClick={scroll} to="group-c">
            <h3>Group C</h3>
          </Link>
        </div>
        <Outlet />
        <div className="space"></div>
      </>
    );
  } else if (
    tech === "Mechanical Technology" ||
    tech === "Civil Technology" ||
    tech === "Electrical Technology"
  ) {
    return (
      <>
        <div className="space"></div>
        <div className="nav_display">
          <h1 className="head">
            <div>
              <BsArrowDownShort />
              Select Group
              <BsArrowDownShort />
            </div>
          </h1>

          <Link onClick={scroll} to="group-a">
            <h3>Group A</h3>
          </Link>
          <Link onClick={scroll} to="group-b">
            <h3>Group B</h3>
          </Link>
        </div>
        <Outlet />
        <div className="space"></div>
      </>
    );
  } else {
    return (
      <>
      <RenderRoutine group="" />
        {/* <div className="space"></div>
        <div className="nav_display">
          <h1 className="head">
            <div>
              <BsArrowDownShort />
              Click Here
              <BsArrowDownShort />
            </div>
          </h1>

          <Link onClick={scroll} to="routine">
            <h3>Get Routine</h3>
          </Link>
        </div>
        <Outlet />
        <div className="space"></div> */}
      </>
    );
  }
};

export default Group;
