import React from "react";

import "./Styling/routine.css";
import { BsArrowDownShort } from "react-icons/bs";


import Cst12 from "./Cst_1_2";
import Cst14 from "./Cst_1_4";
import Cst16 from "./Cst_1_6";
import Cst22 from "./Cst_2_2";
import Cst24 from "./Cst_2_4";
import Cst26 from "./Cst_2_6";

import Cmt12 from "./Cmt_1_2";
import Cmt14 from "./Cmt_1_4";
import Cmt16 from "./Cmt_1_6";
import Cmt22 from "./Cmt_2_2";
import Cmt24 from "./Cmt_2_4";
import Cmt26 from "./Cmt_2_6";


const RenderRoutine = ({ group }) => {
  localStorage.setItem("group", group);
  let tech = localStorage.getItem("tech");
  let shift = localStorage.getItem("shift");
  let sem = localStorage.getItem("sem");
  let grp = localStorage.getItem("group");

  let routineHead = <>
    Depertment: {tech},
    Shift: {shift},
    Semester: {sem},
    {grp ? <>Group: {grp}</> : ''}
  </>
  const renderRoutine = () => {
    if (
      tech === "Computer Science and Technology" &&
      shift === "1st" &&
      sem === "2nd" &&
      grp === "A"
    ) {
      return <Cst12 />;
    } else if (
      tech === "Computer Science and Technology" &&
      shift === "1st" &&
      sem === "4th" &&
      grp === "A"
    ) {
      return <Cst14 />;
    } else if (
      tech === "Computer Science and Technology" &&
      shift === "1st" &&
      sem === "6th" &&
      grp === "A"
    ) {
      return <Cst16 />;
    } else if (
      tech === "Computer Science and Technology" &&
      shift === "2nd" &&
      sem === "2nd" &&
      grp === "A"
    ) {
      return <Cst22 />;
    } else if (
      tech === "Computer Science and Technology" &&
      shift === "2nd" &&
      sem === "4th" &&
      grp === "A"
    ) {
      return <Cst24 />;
    } else if (
      tech === "Computer Science and Technology" &&
      shift === "2nd" &&
      sem === "6th" &&
      grp === "A"
    ) {
      return <Cst26 />;
    } else if (
      tech === "Computer Technology" &&
      shift === "1st" &&
      sem === "2nd" &&
      grp === ""
    ) {
      return <Cmt12 />;
    } else if (
      tech === "Computer Technology" &&
      shift === "1st" &&
      sem === "4th" &&
      grp === ""
    ) {
      return <Cmt14 />;
    } else if (
      tech === "Computer Technology" &&
      shift === "1st" &&
      sem === "6th" &&
      grp === ""
    ) {
      return <Cmt16 />;
    } else if (
      tech === "Computer Technology" &&
      shift === "2nd" &&
      sem === "2nd" &&
      grp === ""
    ) {
      return <Cmt22 />;
    } else if (
      tech === "Computer Technology" &&
      shift === "2nd" &&
      sem === "4th" &&
      grp === ""
    ) {
      return <Cmt24 />;
    } else if (
      tech === "Computer Technology" &&
      shift === "2nd" &&
      sem === "6th" &&
      grp === ""
    ) {
      return <Cmt26 />;
    } else {
      return (
        <div>
          <div className="space"></div>
          <h6
            style={{
              padding: "1rem",
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "600",
            }}
          >
            Routine can not find. <br />
            ({routineHead})<br />routine is not exists.
          </h6>
          <div className="space"></div>
        </div>
      );
    }
  };
  return (
    <>
      <h1 style={{marginBottom:"0.1rem"}} className="head"><BsArrowDownShort />Your Routine<BsArrowDownShort /></h1>
      <div>{renderRoutine()}</div>
    </>
  );
};

export default RenderRoutine;
