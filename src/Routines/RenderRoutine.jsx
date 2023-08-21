import React from "react";

import "./Styling/routine.css";
import { BsArrowDownShort } from "react-icons/bs";

import Cst12 from "./computer/cst_1_2";
import Cst14 from "./computer/cst_1_4";
import Cst22 from "./computer/cst_2_2";
import Cst24 from "./computer/cst_2_4";

import Cmt16 from "./computer/cmt_1_6";
import Cmt26 from "./computer/cmt_2_6";

import Pt12 from "./power/pt_1_2";
import Pt14 from "./power/pt_1_4";
import Pt16 from "./power/pt_1_6";
import Pt22 from "./power/pt_2_2";
import Pt24 from "./power/pt_2_4";
import Pt26 from "./power/pt_2_6";

import Rac12 from "./rac/rac_1_2";
import Rac14 from "./rac/rac_1_4";
import Rac16 from "./rac/rac_1_6";
import Rac22 from "./rac/rac_2_2";
import Rac24 from "./rac/rac_2_4";
import Rac26 from "./rac/rac_2_6";

import Ent12 from "./electronics/ent_1_2";
import Ent14 from "./electronics/ent_1_4";
import Ent16 from "./electronics/ent_1_6";
import Ent22 from "./electronics/ent_2_2";
import Ent24 from "./electronics/ent_2_4";
import Ent26 from "./electronics/ent_2_6";

import Ct14a from "./civil/ct_1_4a";
import Ct16a from "./civil/ct_1_6a";
import Ct12a from "./civil/ct_1_2a";
import Ct22a from "./civil/ct_2_2a";
import Ct24a from "./civil/ct_2_4a";
import Ct26a from "./civil/ct_2_6a";

import Ct12b from "./civil/ct_1_2b";
import Ct14b from "./civil/ct_1_4b";
import Ct16b from "./civil/ct_1_6b";
import Ct22b from "./civil/ct_2_2b";
import Ct24b from "./civil/ct_2_4b";
import Ct26b from "./civil/ct_2_6b";

import Et12a from "./et/et_1_2a";
import Et14a from "./et/et_1_4a";
import Et16a from "./et/et_1_6a";
import Et22a from "./et/et_2_2a";
import Et24a from "./et/et_2_4a";
import Et26a from "./et/et_2_6a";

import Et12b from "./et/et_1_2b";
import Et14b from "./et/et_1_4b";
import Et16b from "./et/et_1_6b";
import Et22b from "./et/et_2_2b";
import Et24b from "./et/et_2_4b";
import Et26b from "./et/et_2_6b";

import Et12c from "./et/et_1_2c";
import Et14c from "./et/et_1_4c";
import Et22c from "./et/et_2_2c";
import Et24c from "./et/et_2_4c";

import Mt12a from "./mt/mt_1_2a";
import Mt14a from "./mt/mt_1_4a";
import Mt16a from "./mt/mt_1_6a";
import Mt22a from "./mt/mt_2_2a";
import Mt24a from "./mt/mt_2_4a";
import Mt26a from "./mt/mt_2_6a";

import Mt12b from "./mt/mt_1_2b";
import Mt14b from "./mt/mt_1_4b";
import Mt16b from "./mt/mt_1_6b";
import Mt22b from "./mt/mt_2_2b";
import Mt24b from "./mt/mt_2_4b";
import Mt26b from "./mt/mt_2_6b";

import Mt12c from "./mt/mt_1_2c";
import Mt14c from "./mt/mt_1_4c";
import Mt22c from "./mt/mt_2_2c";
import Mt24c from "./mt/mt_2_4c";

import Mnt16 from "./mining/mnt_1_6"
import Mnt26 from "./mining/mnt_2_6";

import Th16 from "./th/th_1_6"
import Th26 from "./th/th_2_6";

import notFind from './notFind'

import Routine from "../components/Routine";
import { Link } from "react-router-dom";

const RenderRoutine = ({ group }) => {

  localStorage.setItem("group", group);
  let tech = localStorage.getItem("tech");
  let shift = localStorage.getItem("shift");
  let sem = localStorage.getItem("sem");
  let grp = localStorage.getItem("group");

  const renderRoutine = () => {
    if (
      tech === "Computer Science and Technology" &&
      shift === "1st" &&
      sem === "2nd"
    ) {
      return Cst12;
    } else if (
      tech === "Computer Science and Technology" &&
      shift === "1st" &&
      sem === "4th"
    ) {
      return Cst14;
    } else if (
      tech === "Computer Science and Technology" &&
      shift === "2nd" &&
      sem === "2nd"
    ) {
      return Cst22;
    } else if (
      tech === "Computer Science and Technology" &&
      shift === "2nd" &&
      sem === "4th"
    ) {
      return Cst24;
    } else if (
      tech === "Computer Technology" &&
      shift === "1st" &&
      sem === "6th"
    ) {
      return Cmt16;
    } else if (
      tech === "Computer Technology" &&
      shift === "2nd" &&
      sem === "6th"
    ) {
      return Cmt26;
    } else if (
      tech === "Power Technology" &&
      shift === "1st" &&
      sem === "2nd"
    ) {
      return Pt12  ;
    } else if (
      tech === "Power Technology" &&
      shift === "1st" &&
      sem === "4th"
    ) {
      return Pt14  ;
    } else if (
      tech === "Power Technology" &&
      shift === "1st" &&
      sem === "6th"
    ) {
      return Pt16  ;
    } else if (
      tech === "Power Technology" &&
      shift === "2nd" &&
      sem === "2nd"
    ) {
      return Pt22  ;
    } else if (
      tech === "Power Technology" &&
      shift === "2nd" &&
      sem === "4th"
    ) {
      return Pt24  ;
    } else if (
      tech === "Power Technology" &&
      shift === "2nd" &&
      sem === "6th"
    ) {
      return Pt26  ;
    } else if (
      tech === "Refrigeration & Air Conditioning Technology" &&
      shift === "1st" &&
      sem === "2nd"
    ) {
      return Rac12  ;
    } else if (
      tech === "Refrigeration & Air Conditioning Technology" &&
      shift === "1st" &&
      sem === "4th"
    ) {
      return Rac14  
    } else if (
      tech === "Refrigeration & Air Conditioning Technology" &&
      shift === "1st" &&
      sem === "6th"
    ) {
      return Rac16  ;
    } else if (
      tech === "Refrigeration & Air Conditioning Technology" &&
      shift === "2nd" &&
      sem === "2nd"
    ) {
      return Rac22  ;
    } else if (
      tech === "Refrigeration & Air Conditioning Technology" &&
      shift === "2nd" &&
      sem === "4th"
    ) {
      return Rac24  ;
    } else if (
      tech === "Refrigeration & Air Conditioning Technology" &&
      shift === "2nd" &&
      sem === "6th"
    ) {
      return Rac26  ;
    } else if (
      tech === "Electronics Technology" &&
      shift === "1st" &&
      sem === "2nd"
    ) {
      return Ent12  ;
    } else if (
      tech === "Electronics Technology" &&
      shift === "1st" &&
      sem === "4th"
    ) {
      return Ent14  ;
    } else if (
      tech === "Electronics Technology" &&
      shift === "1st" &&
      sem === "6th"
    ) {
      return Ent16  ;
    } else if (
      tech === "Electronics Technology" &&
      shift === "2nd" &&
      sem === "2nd"
    ) {
      return Ent22  ;
    } else if (
      tech === "Electronics Technology" &&
      shift === "2nd" &&
      sem === "4th"
    ) {
      return Ent24  ;
    } else if (
      tech === "Electronics Technology" &&
      shift === "2nd" &&
      sem === "6th"
    ) {
      return Ent26  ;
    } else if (
      tech === "Civil Technology" &&
      shift === "1st" &&
      sem === "2nd" &&
      grp === "A"
    ) {
      return Ct12a ;
    } else if (
      tech === "Civil Technology" &&
      shift === "1st" &&
      sem === "4th" &&
      grp === "A"
    ) {
      return Ct14a ;
    } else if (
      tech === "Civil Technology" &&
      shift === "1st" &&
      sem === "6th" &&
      grp === "A"
    ) {
      return Ct16a ;
    } else if (
      tech === "Civil Technology" &&
      shift === "2nd" &&
      sem === "2nd" &&
      grp === "A"
    ) {
      return Ct22a ;
    } else if (
      tech === "Civil Technology" &&
      shift === "2nd" &&
      sem === "4th" &&
      grp === "A"
    ) {
      return Ct24a ;
    } else if (
      tech === "Civil Technology" &&
      shift === "2nd" &&
      sem === "6th" &&
      grp === "A"
    ) {
      return Ct26a ;
    } else if (
      tech === "Civil Technology" &&
      shift === "1st" &&
      sem === "2nd" &&
      grp === "B"
    ) {
      return Ct12b;
    } else if (
      tech === "Civil Technology" &&
      shift === "1st" &&
      sem === "4th" &&
      grp === "B"
    ) {
      return Ct14b;
    } else if (
      tech === "Civil Technology" &&
      shift === "1st" &&
      sem === "6th" &&
      grp === "B"
    ) {
      return Ct16b;
    } else if (
      tech === "Civil Technology" &&
      shift === "2nd" &&
      sem === "2nd" &&
      grp === "B"
    ) {
      return Ct22b;
    } else if (
      tech === "Civil Technology" &&
      shift === "2nd" &&
      sem === "4th" &&
      grp === "B"
    ) {
      return Ct24b;
    } else if (
      tech === "Civil Technology" &&
      shift === "2nd" &&
      sem === "6th" &&
      grp === "B"
    ) {
      return Ct26b;
    } else if (
      tech === "Electrical Technology" &&
      shift === "1st" &&
      sem === "2nd" &&
      grp === "A"
    ) {
      return Et12a  ;
    } else if (
      tech === "Electrical Technology" &&
      shift === "1st" &&
      sem === "4th" &&
      grp === "A"
    ) {
      return Et14a  ;
    } else if (
      tech === "Electrical Technology" &&
      shift === "1st" &&
      sem === "6th" &&
      grp === "A"
    ) {
      return Et16a  ;
    } else if (
      tech === "Electrical Technology" &&
      shift === "2nd" &&
      sem === "2nd" &&
      grp === "A"
    ) {
      return Et22a  ;
    } else if (
      tech === "Electrical Technology" &&
      shift === "2nd" &&
      sem === "4th" &&
      grp === "A"
    ) {
      return Et24a  ;
    } else if (
      tech === "Electrical Technology" &&
      shift === "2nd" &&
      sem === "6th" &&
      grp === "A"
    ) {
      return Et26a  ;
    } else if (
      tech === "Electrical Technology" &&
      shift === "1st" &&
      sem === "2nd" &&
      grp === "B"
    ) {
     return Et12b;
    } else if (
      tech === "Electrical Technology" &&
      shift === "1st" &&
      sem === "4th" &&
      grp === "B"
    ) {
     return Et14b;
    } else if (
      tech === "Electrical Technology" &&
      shift === "1st" &&
      sem === "6th" &&
      grp === "B"
    ) {
     return Et16b;
    } else if (
      tech === "Electrical Technology" &&
      shift === "2nd" &&
      sem === "2nd" &&
      grp === "B"
    ) {
     return Et22b;
    } else if (
      tech === "Electrical Technology" &&
      shift === "2nd" &&
      sem === "4th" &&
      grp === "B"
    ) {
     return Et24b;
    } else if (
      tech === "Electrical Technology" &&
      shift === "2nd" &&
      sem === "6th" &&
      grp === "B"
    ) {
     return Et26b;
    } else if (
      tech === "Electrical Technology" &&
      shift === "1st" &&
      sem === "2nd" &&
      grp === "C"
    ) {
      return Et12c;
    } else if (
      tech === "Electrical Technology" &&
      shift === "1st" &&
      sem === "4th" &&
      grp === "C"
    ) {
      return Et14c;
    } else if (
      tech === "Electrical Technology" &&
      shift === "2nd" &&
      sem === "2nd" &&
      grp === "C"
    ) {
      return Et22c;
    } else if (
      tech === "Electrical Technology" &&
      shift === "2nd" &&
      sem === "4th" &&
      grp === "C"
    ) {
      return Et24c;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "1st" &&
      sem === "2nd" &&
      grp === "A"
    ) {
      return Mt12a;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "1st" &&
      sem === "4th" &&
      grp === "A"
    ) {
      return Mt14a;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "1st" &&
      sem === "6th" &&
      grp === "A"
    ) {
      return Mt16a;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "2nd" &&
      sem === "2nd" &&
      grp === "A"
    ) {
      return Mt22a;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "2nd" &&
      sem === "4th" &&
      grp === "A"
    ) {
      return Mt24a;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "2nd" &&
      sem === "6th" &&
      grp === "A"
    ) {
      return Mt26a;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "1st" &&
      sem === "2nd" &&
      grp === "B"
    ) {
      return Mt12b;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "1st" &&
      sem === "4th" &&
      grp === "B"
    ) {
      return Mt14b;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "1st" &&
      sem === "6th" &&
      grp === "B"
    ) {
      return Mt16b;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "2nd" &&
      sem === "2nd" &&
      grp === "B"
    ) {
      return Mt22b;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "2nd" &&
      sem === "4th" &&
      grp === "B"
    ) {
      return Mt24b;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "2nd" &&
      sem === "6th" &&
      grp === "B"
    ) {
      return Mt26b;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "1st" &&
      sem === "2nd" &&
      grp === "C"
    ) {
      return Mt12c;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "1st" &&
      sem === "4th" &&
      grp === "C"
    ) {
      return Mt14c;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "2nd" &&
      sem === "2nd" &&
      grp === "C"
    ) {
      return Mt22c;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "2nd" &&
      sem === "4th" &&
      grp === "C"
    ) {
      return Mt24c;
    } else if (
      tech === "Mining Technology" &&
      shift === "1st" &&
      sem === "6th"
    ) {
      return Mnt16;
    } else if (
      tech === "Mining Technology" &&
      shift === "2nd" &&
      sem === "6th"
    ) {
      return Mnt26;
    }  else if (
      tech === "Tourism and Hospitality" &&
      shift === "1st" &&
      sem === "6th"
    ) {
      return Th16;
    } else if (
      tech === "Tourism and Hospitality" &&
      shift === "2nd" &&
      sem === "6th"
    ) {
      return Th26;
    } 
    
    else {
      return notFind
    }
  };
  return (
    <>
     <h1 className="head">
        <div>
          <BsArrowDownShort />
          Your Routine
          <BsArrowDownShort />
        </div>
      </h1>
      
      <div style={{width:"100%", textAlign:"center", margin:"1rem 0"}}>
        <Link className='saveRoutine' to="/loaded-routine">
              Open Routine in single page.
        </Link>
      </div>
      <div>
        <Routine routineData={renderRoutine()} />
      </div>
    </>
  );
};
export default RenderRoutine;
