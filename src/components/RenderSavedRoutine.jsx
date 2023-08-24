// saved routine render
import React from "react";

import "../Routines/routine.css";
import renderRoutine from "../Routines/importData"


import Routine from "./Routine";

const RenderSavedRoutine = () => {

  const tech = localStorage.getItem("tech");
  const shift = localStorage.getItem("shift");
  const semester = localStorage.getItem("semester");
  const group = localStorage.getItem("group");

  const find = "saved"

  return (
    <>
      <div>
        <Routine routineData={renderRoutine(tech, shift, semester, group, find)} tech={tech} shift={shift} semester={semester} group={group}  />
      </div>
    </>
  );
};

export default RenderSavedRoutine;
