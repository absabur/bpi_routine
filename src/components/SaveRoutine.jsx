// process save routine and open in one page

import React, { useContext } from "react";

import "../Routines/Styling/routine.css";

import Cst12 from "../Routines/computer/cst_1_2";
import Cst14 from "../Routines/computer/cst_1_4";
import Cst22 from "../Routines/computer/cst_2_2";
import Cst24 from "../Routines/computer/cst_2_4";

import Cmt16 from "../Routines/computer/cmt_1_6";
import Cmt26 from "../Routines/computer/cmt_2_6";

import Pt12 from "../Routines/power/pt_1_2";
import Pt14 from "../Routines/power/pt_1_4";
import Pt16 from "../Routines/power/pt_1_6";
import Pt22 from "../Routines/power/pt_2_2";
import Pt24 from "../Routines/power/pt_2_4";
import Pt26 from "../Routines/power/pt_2_6";

import Rac12 from "../Routines/rac/rac_1_2";
import Rac14 from "../Routines/rac/rac_1_4";
import Rac16 from "../Routines/rac/rac_1_6";
import Rac22 from "../Routines/rac/rac_2_2";
import Rac24 from "../Routines/rac/rac_2_4";
import Rac26 from "../Routines/rac/rac_2_6";

import Ent12 from "../Routines/electronics/ent_1_2";
import Ent14 from "../Routines/electronics/ent_1_4";
import Ent16 from "../Routines/electronics/ent_1_6";
import Ent22 from "../Routines/electronics/ent_2_2";
import Ent24 from "../Routines/electronics/ent_2_4";
import Ent26 from "../Routines/electronics/ent_2_6";

import Ct14a from "../Routines/civil/ct_1_4a";
import Ct16a from "../Routines/civil/ct_1_6a";
import Ct12a from "../Routines/civil/ct_1_2a";
import Ct22a from "../Routines/civil/ct_2_2a";
import Ct24a from "../Routines/civil/ct_2_4a";
import Ct26a from "../Routines/civil/ct_2_6a";

import Ct12b from "../Routines/civil/ct_1_2b";
import Ct14b from "../Routines/civil/ct_1_4b";
import Ct16b from "../Routines/civil/ct_1_6b";
import Ct22b from "../Routines/civil/ct_2_2b";
import Ct24b from "../Routines/civil/ct_2_4b";
import Ct26b from "../Routines/civil/ct_2_6b";

import Et12a from "../Routines/et/et_1_2a";
import Et14a from "../Routines/et/et_1_4a";
import Et16a from "../Routines/et/et_1_6a";
import Et22a from "../Routines/et/et_2_2a";
import Et24a from "../Routines/et/et_2_4a";
import Et26a from "../Routines/et/et_2_6a";

import Et12b from "../Routines/et/et_1_2b";
import Et14b from "../Routines/et/et_1_4b";
import Et16b from "../Routines/et/et_1_6b";
import Et22b from "../Routines/et/et_2_2b";
import Et24b from "../Routines/et/et_2_4b";
import Et26b from "../Routines/et/et_2_6b";

import Et12c from "../Routines/et/et_1_2c";
import Et14c from "../Routines/et/et_1_4c";
import Et22c from "../Routines/et/et_2_2c";
import Et24c from "../Routines/et/et_2_4c";

import Mt12a from "../Routines/mt/mt_1_2a";
import Mt14a from "../Routines/mt/mt_1_4a";
import Mt16a from "../Routines/mt/mt_1_6a";
import Mt22a from "../Routines/mt/mt_2_2a";
import Mt24a from "../Routines/mt/mt_2_4a";
import Mt26a from "../Routines/mt/mt_2_6a";

import Mt12b from "../Routines/mt/mt_1_2b";
import Mt14b from "../Routines/mt/mt_1_4b";
import Mt16b from "../Routines/mt/mt_1_6b";
import Mt22b from "../Routines/mt/mt_2_2b";
import Mt24b from "../Routines/mt/mt_2_4b";
import Mt26b from "../Routines/mt/mt_2_6b";

import Mt12c from "../Routines/mt/mt_1_2c";
import Mt14c from "../Routines/mt/mt_1_4c";
import Mt22c from "../Routines/mt/mt_2_2c";
import Mt24c from "../Routines/mt/mt_2_4c";

import Mnt16 from "../Routines/mining/mnt_1_6"
import Mnt26 from "../Routines/mining/mnt_2_6";

import Th16 from "../Routines/th/th_1_6"
import Th26 from "../Routines/th/th_2_6";

import notFind from '../Routines/notFind'

import Routine from "./Routine";
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
      <div>
        <MyRoutine />
      </div>
    </>
  );
};

export default SaveRoutine;
