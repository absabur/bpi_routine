import React from "react";

import "../Routines/Styling/routine.css";
import { BsArrowDownShort } from "react-icons/bs";

import Cst12 from "../Routines/computer/Cst_1_2";
import Cst14 from "../Routines/computer/Cst_1_4";
import Cst22 from "../Routines/computer/Cst_2_2";
import Cst24 from "../Routines/computer/Cst_2_4";

import Cmt16 from "../Routines/computer/Cmt_1_6";
import Cmt26 from "../Routines/computer/Cmt_2_6";

import Pt12 from "../Routines/power/Pt_1_2";
import Pt14 from "../Routines/power/Pt_1_4";
import Pt16 from "../Routines/power/Pt_1_6";
import Pt22 from "../Routines/power/Pt_2_2";
import Pt24 from "../Routines/power/Pt_2_4";
import Pt26 from "../Routines/power/Pt_2_6";

import Rac12 from "../Routines/rac/Rac_1_2";
import Rac14 from "../Routines/rac/Rac_1_4";
import Rac16 from "../Routines/rac/Rac_1_6";
import Rac22 from "../Routines/rac/Rac_2_2";
import Rac24 from "../Routines/rac/Rac_2_4";
import Rac26 from "../Routines/rac/Rac_2_6";

import Ent12 from "../Routines/electronics/Ent_1_2";
import Ent14 from "../Routines/electronics/Ent_1_4";
import Ent16 from "../Routines/electronics/Ent_1_6";
import Ent22 from "../Routines/electronics/Ent_2_2";
import Ent24 from "../Routines/electronics/Ent_2_4";
import Ent26 from "../Routines/electronics/Ent_2_6";

import Ct12a from "../Routines/civil/Ct_1_2a";
import Ct14a from "../Routines/civil/Ct_1_4a";
import Ct16a from "../Routines/civil/Ct_1_6a";
import Ct22a from "../Routines/civil/Ct_2_2a";
import Ct24a from "../Routines/civil/Ct_2_4a";
import Ct26a from "../Routines/civil/Ct_2_6a";

import Ct12b from "../Routines/civil/Ct_1_2b";
import Ct14b from "../Routines/civil/Ct_1_4b";
import Ct16b from "../Routines/civil/Ct_1_6b";
import Ct22b from "../Routines/civil/Ct_2_2b";
import Ct24b from "../Routines/civil/Ct_2_4b";
import Ct26b from "../Routines/civil/Ct_2_6b";

const SavedRoutine = () => {
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
      return <Cst12 />;
    } else if (
      tech === "Computer Science and Technology" &&
      shift === "1st" &&
      sem === "4th"
    ) {
      return <Cst14 />;
    } else if (
      tech === "Computer Science and Technology" &&
      shift === "2nd" &&
      sem === "2nd"
    ) {
      return <Cst22 />;
    } else if (
      tech === "Computer Science and Technology" &&
      shift === "2nd" &&
      sem === "4th"
    ) {
      return <Cst24 />;
    } else if (
      tech === "Computer Technology" &&
      shift === "1st" &&
      sem === "6th"
    ) {
      return <Cmt16 />;
    } else if (
      tech === "Computer Technology" &&
      shift === "2nd" &&
      sem === "6th"
    ) {
      return <Cmt26 />;
    } 
        
        
    
    else if (
      tech === "Power Technology" &&
      shift === "1st" &&
      sem === "2nd"
    ) {
      return <Pt12 />;
    }  else if (
      tech === "Power Technology" &&
      shift === "1st" &&
      sem === "4th"
    ) {
      return <Pt14 />;
    } else if (
      tech === "Power Technology" &&
      shift === "1st" &&
      sem === "6th"
    ) {
      return <Pt16 />;
    } else if (
      tech === "Power Technology" &&
      shift === "2nd" &&
      sem === "2nd"
    ) {
      return <Pt22 />;
    }  else if (
      tech === "Power Technology" &&
      shift === "2nd" &&
      sem === "4th"
    ) {
      return <Pt24 />;
    } else if (
      tech === "Power Technology" &&
      shift === "2nd" &&
      sem === "6th"
    ) {
      return <Pt26 />;
    } 



    else if (
      tech === "Refrigeration & Air Conditioning Technology" &&
      shift === "1st" &&
      sem === "2nd"
    ) {
      return <Rac12 />;
    }  else if (
      tech === "Refrigeration & Air Conditioning Technology" &&
      shift === "1st" &&
      sem === "4th"
    ) {
      return <Rac14 />;
    } else if (
      tech === "Refrigeration & Air Conditioning Technology" &&
      shift === "1st" &&
      sem === "6th"
    ) {
      return <Rac16 />;
    } else if (
      tech === "Refrigeration & Air Conditioning Technology" &&
      shift === "2nd" &&
      sem === "2nd"
    ) {
      return <Rac22 />;
    }  else if (
      tech === "Refrigeration & Air Conditioning Technology" &&
      shift === "2nd" &&
      sem === "4th"
    ) {
      return <Rac24 />;
    } else if (
      tech === "Refrigeration & Air Conditioning Technology" &&
      shift === "2nd" &&
      sem === "6th"
    ) {
      return <Rac26 />;
    } 
    


    else if (
      tech === "Electronics Technology" &&
      shift === "1st" &&
      sem === "2nd"
    ) {
      return <Ent12 />;
    }  else if (
      tech === "Electronics Technology" &&
      shift === "1st" &&
      sem === "4th"
    ) {
      return <Ent14 />;
    } else if (
      tech === "Electronics Technology" &&
      shift === "1st" &&
      sem === "6th"
    ) {
      return <Ent16 />;
    } else if (
      tech === "Electronics Technology" &&
      shift === "2nd" &&
      sem === "2nd"
    ) {
      return <Ent22 />;
    }  else if (
      tech === "Electronics Technology" &&
      shift === "2nd" &&
      sem === "4th"
    ) {
      return <Ent24 />;
    } else if (
      tech === "Electronics Technology" &&
      shift === "2nd" &&
      sem === "6th"
    ) {
      return <Ent26 />;
    } 


    else if (
      tech === "Civil Technology" &&
      shift === "1st" &&
      sem === "2nd" &&
      grp === "A"
    ) {
      return <Ct12a />;
    }  else if (
      tech === "Civil Technology" &&
      shift === "1st" &&
      sem === "4th" &&
      grp === "A"
    ) {
      return <Ct14a />;
    } else if (
      tech === "Civil Technology" &&
      shift === "1st" &&
      sem === "6th" &&
      grp === "A"
    ) {
      return <Ct16a />;
    } else if (
      tech === "Civil Technology" &&
      shift === "2nd" &&
      sem === "2nd" &&
      grp === "A"
    ) {
      return <Ct22a />;
    }  else if (
      tech === "Civil Technology" &&
      shift === "2nd" &&
      sem === "4th" &&
      grp === "A"
    ) {
      return <Ct24a />;
    } else if (
      tech === "Civil Technology" &&
      shift === "2nd" &&
      sem === "6th" &&
      grp === "A"
    ) {
      return <Ct26a />;
    } 


    else if (
      tech === "Civil Technology" &&
      shift === "1st" &&
      sem === "2nd" &&
      grp === "B"
    ) {
      return <Ct12b />;
    }  else if (
      tech === "Civil Technology" &&
      shift === "1st" &&
      sem === "4th" &&
      grp === "B"
    ) {
      return <Ct14b />;
    } else if (
      tech === "Civil Technology" &&
      shift === "1st" &&
      sem === "6th" &&
      grp === "B"
    ) {
      return <Ct16b />;
    } else if (
      tech === "Civil Technology" &&
      shift === "2nd" &&
      sem === "2nd" &&
      grp === "B"
    ) {
      return <Ct22b />;
    }  else if (
      tech === "Civil Technology" &&
      shift === "2nd" &&
      sem === "4th" &&
      grp === "B"
    ) {
      return <Ct24b />;
    } else if (
      tech === "Civil Technology" &&
      shift === "2nd" &&
      sem === "6th" &&
      grp === "B"
    ) {
      return <Ct26b />;
    } 
    
    
    
    else {
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
      <h1 style={{ marginBottom: "0.1rem" }} className="head">
        <BsArrowDownShort />
        Your Routine
        <BsArrowDownShort />
      </h1>
      <div>{renderRoutine()}</div>
    </>
  );
};

export default SavedRoutine;
