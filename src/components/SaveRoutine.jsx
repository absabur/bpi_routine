// process save routine and open in one page

import React, { useContext } from "react";

import "../Routines/Styling/routine.css";
import GlobalState from "./GlobalState";
import MyRoutine from "./MyRoutine";

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
        <MyRoutine />
      </div>
    </>
  );
};

export default SaveRoutine;
