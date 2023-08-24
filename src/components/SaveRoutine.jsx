// process save routine and open in one page

import React, { useContext } from "react";

import "../Routines/routine.css";
import RenderSavedRoutine from "./RenderSavedRoutine";
import GlobalState from "../service/GlobalState";

const SaveRoutine = () => {
  const { tech, shift, semester, group } = useContext(GlobalState);
  if (tech) {
    localStorage.setItem("tech",tech);
    localStorage.setItem("shift",shift);
    localStorage.setItem("semester",semester);
    localStorage.setItem("group",group);
  }
  
  return (
    <>
      <h1 style={{color: 'green', marginBottom: '0'}}>Routine has been saved successfully.</h1>
      <div>
        <RenderSavedRoutine />
      </div>
    </>
  );
};

export default SaveRoutine;
