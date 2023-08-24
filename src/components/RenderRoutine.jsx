import React, { useContext } from "react";

import "../Routines/routine.css";
import { BsArrowDownShort } from "react-icons/bs";

import Routine from "./Routine";
import { Link } from "react-router-dom";
import { RiSave3Fill } from "react-icons/ri";
import renderRoutine from "../Routines/importData"
import GlobalState from "../service/GlobalState";

const RenderRoutine = ({ group }) => {

  const { tech, shift, semester, setGroup } = useContext(GlobalState);
  if (group) {
    setGroup(group)
  }else{
    setGroup("")
  }
  const find = "running";

  return (
    <>
     <h1 className="head">
        <div>
          <BsArrowDownShort />
          Routine
          <BsArrowDownShort />
        </div>
      </h1>
      
      <div style={{width:"100%", textAlign:"center", margin:"1rem 0"}}>
        <p style={{fontSize: '20px', fontWeight: "700", color: "darkblue", padding: ' 0 1rem'}}>Save to open routine in one click.</p>
        <Link className='save-button' to="/loaded-routine">
              <RiSave3Fill style={{boxShadow: "0 0 10px black", borderRadius: "10px", margin: "1rem 0 0 0", backgroundColor:"white", color: 'rgb(54, 0, 18)'}}/>
        </Link>
      </div>
      <div>
        <Routine routineData={renderRoutine(tech, shift, semester, group, find)} tech={tech} shift={shift} semester={semester} group={group} />
      </div>
    </>
  );
};
export default RenderRoutine;
