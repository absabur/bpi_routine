import React from "react";

import { Link, Outlet } from "react-router-dom";
import { BsArrowDownShort } from "react-icons/bs";

const Group = ({ semester }) => {
  localStorage.setItem("sem", semester);
  return (
    <>
      <div className="space"></div>
      <div className="nav_display">
        <h1 className="head"><BsArrowDownShort />Select Group<BsArrowDownShort /></h1>
        <b
          style={{
            width: "100%",
            textAlign: "center",
            color: "rgb(69, 0, 55)",
            fontSize: "1.4rem",
            padding: "1rem",
          }}
        >
          Select 'No Group', If you don't have a group.
        </b>
        <Link to="no-group">
          <h3>No Group</h3>
        </Link>
        <Link to="group-a">
          <h3>Group A</h3>
        </Link>
        <Link to="group-b">
          <h3>Group B</h3>
        </Link>
        <Link to="group-c">
          <h3>Group C</h3>
        </Link>
      </div>
      <Outlet />
      <div className="space"></div>
    </>
  );
};

export default Group;
