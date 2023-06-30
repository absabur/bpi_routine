import React from "react";

import "../Routines/Styling/routine.css";
import { BsArrowDownShort } from "react-icons/bs";


import Cst12 from "../Routines/Cmt_1_2";
import Cst14 from "../Routines/Cst_1_4";
import Cst16 from "../Routines/Cst_1_6";
import Cst22 from "../Routines/Cst_2_2";
import Cst24 from "../Routines/Cst_2_4";
import Cst26 from "../Routines/Cst_2_6";

import Cmt12 from "../Routines/Cmt_1_2";
import Cmt14 from "../Routines/Cmt_1_4";
import Cmt16 from "../Routines/Cmt_1_6";
import Cmt22 from "../Routines/Cmt_2_2";
import Cmt24 from "../Routines/Cmt_2_4";
import Cmt26 from "../Routines/Cmt_2_6";


const SavedRoutine = () => {
  let tech = localStorage.getItem("tech");
  let shift = localStorage.getItem("shift");
  let sem = localStorage.getItem("sem");
  let grp = localStorage.getItem("group");


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
            Routine is not saved. visit manually to save.
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

export default SavedRoutine;
