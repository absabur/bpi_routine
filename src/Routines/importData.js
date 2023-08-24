import Cst12 from "./computer/1st-shift/cst_1_2";
import Cst14 from "./computer/1st-shift/cst_1_4";
import Cst22 from "./computer/2nd-shift/cst_2_2";
import Cst24 from "./computer/2nd-shift/cst_2_4";

import Cmt16 from "./computer/1st-shift/cmt_1_6";
import Cmt26 from "./computer/2nd-shift/cmt_2_6";

import Pt12 from "./power/1st-shift/pt_1_2";
import Pt14 from "./power/1st-shift/pt_1_4";
import Pt16 from "./power/1st-shift/pt_1_6";
import Pt22 from "./power/2nd-shift/pt_2_2";
import Pt24 from "./power/2nd-shift/pt_2_4";
import Pt26 from "./power/2nd-shift/pt_2_6";

import Rac12 from "./rac/1st-shift/rac_1_2";
import Rac14 from "./rac/1st-shift/rac_1_4";
import Rac16 from "./rac/1st-shift/rac_1_6";
import Rac22 from "./rac/2nd-shift/rac_2_2";
import Rac24 from "./rac/2nd-shift/rac_2_4";
import Rac26 from "./rac/2nd-shift/rac_2_6";

import Ent12 from "./electronics/1st-shift/ent_1_2";
import Ent14 from "./electronics/1st-shift/ent_1_4";
import Ent16 from "./electronics/1st-shift/ent_1_6";
import Ent22 from "./electronics/2nd-shift/ent_2_2";
import Ent24 from "./electronics/2nd-shift/ent_2_4";
import Ent26 from "./electronics/2nd-shift/ent_2_6";

import Ct12a from "./civil/1st-shift/ct_1_2a";
import Ct14a from "./civil/1st-shift/ct_1_4a";
import Ct16a from "./civil/1st-shift/ct_1_6a";
import Ct22a from "./civil/2nd-shift/ct_2_2a";
import Ct24a from "./civil/2nd-shift/ct_2_4a";
import Ct26a from "./civil/2nd-shift/ct_2_6a";

import Ct12b from "./civil/1st-shift/ct_1_2b";
import Ct14b from "./civil/1st-shift/ct_1_4b";
import Ct16b from "./civil/1st-shift/ct_1_6b";
import Ct22b from "./civil/2nd-shift/ct_2_2b";
import Ct24b from "./civil/2nd-shift/ct_2_4b";
import Ct26b from "./civil/2nd-shift/ct_2_6b";

import Et12a from "./et/1st-shift/et_1_2a";
import Et14a from "./et/1st-shift/et_1_4a";
import Et16a from "./et/1st-shift/et_1_6a";
import Et22a from "./et/2nd-shift/et_2_2a";
import Et24a from "./et/2nd-shift/et_2_4a";
import Et26a from "./et/2nd-shift/et_2_6a";

import Et12b from "./et/1st-shift/et_1_2b";
import Et14b from "./et/1st-shift/et_1_4b";
import Et16b from "./et/1st-shift/et_1_6b";
import Et22b from "./et/2nd-shift/et_2_2b";
import Et24b from "./et/2nd-shift/et_2_4b";
import Et26b from "./et/2nd-shift/et_2_6b";

import Et12c from "./et/1st-shift/et_1_2c";
import Et14c from "./et/1st-shift/et_1_4c";
import Et22c from "./et/2nd-shift/et_2_2c";
import Et24c from "./et/2nd-shift/et_2_4c";

import Mt12a from "./mt/1st-shift/mt_1_2a";
import Mt14a from "./mt/1st-shift/mt_1_4a";
import Mt16a from "./mt/1st-shift/mt_1_6a";
import Mt22a from "./mt/2nd-shift/mt_2_2a";
import Mt24a from "./mt/2nd-shift/mt_2_4a";
import Mt26a from "./mt/2nd-shift/mt_2_6a";

import Mt12b from "./mt/1st-shift/mt_1_2b";
import Mt14b from "./mt/1st-shift/mt_1_4b";
import Mt16b from "./mt/1st-shift/mt_1_6b";
import Mt22b from "./mt/2nd-shift/mt_2_2b";
import Mt24b from "./mt/2nd-shift/mt_2_4b";
import Mt26b from "./mt/2nd-shift/mt_2_6b";

import Mt12c from "./mt/1st-shift/mt_1_2c";
import Mt14c from "./mt/1st-shift/mt_1_4c";
import Mt22c from "./mt/2nd-shift/mt_2_2c";
import Mt24c from "./mt/2nd-shift/mt_2_4c";

import Mnt16 from "./mining/mnt_1_6"
import Mnt26 from "./mining/mnt_2_6";

import Th16 from "./th/th_1_6"
import Th26 from "./th/th_2_6";

import notFind from '../Routines/notFound/notFind'
import notSaved from '../Routines/notFound/notSaved'


const renderRoutine = (tech, shift, semester, group, find) => {
    if (
      tech === "Computer Science and Technology" &&
      shift === "1st" &&
      semester === "2nd"
    ) {
      return Cst12;
    } else if (
      tech === "Computer Science and Technology" &&
      shift === "1st" &&
      semester === "4th"
    ) {
      return Cst14;
    } else if (
      tech === "Computer Science and Technology" &&
      shift === "2nd" &&
      semester === "2nd"
    ) {
      return Cst22;
    } else if (
      tech === "Computer Science and Technology" &&
      shift === "2nd" &&
      semester === "4th"
    ) {
      return Cst24;
    } else if (
      tech === "Computer Technology" &&
      shift === "1st" &&
      semester === "6th"
    ) {
      return Cmt16;
    } else if (
      tech === "Computer Technology" &&
      shift === "2nd" &&
      semester === "6th"
    ) {
      return Cmt26;
    } else if (
      tech === "Power Technology" &&
      shift === "1st" &&
      semester === "2nd"
    ) {
      return Pt12  ;
    } else if (
      tech === "Power Technology" &&
      shift === "1st" &&
      semester === "4th"
    ) {
      return Pt14  ;
    } else if (
      tech === "Power Technology" &&
      shift === "1st" &&
      semester === "6th"
    ) {
      return Pt16  ;
    } else if (
      tech === "Power Technology" &&
      shift === "2nd" &&
      semester === "2nd"
    ) {
      return Pt22  ;
    } else if (
      tech === "Power Technology" &&
      shift === "2nd" &&
      semester === "4th"
    ) {
      return Pt24  ;
    } else if (
      tech === "Power Technology" &&
      shift === "2nd" &&
      semester === "6th"
    ) {
      return Pt26  ;
    } else if (
      tech === "Refrigeration & Air Conditioning Technology" &&
      shift === "1st" &&
      semester === "2nd"
    ) {
      return Rac12  ;
    } else if (
      tech === "Refrigeration & Air Conditioning Technology" &&
      shift === "1st" &&
      semester === "4th"
    ) {
      return Rac14  
    } else if (
      tech === "Refrigeration & Air Conditioning Technology" &&
      shift === "1st" &&
      semester === "6th"
    ) {
      return Rac16  ;
    } else if (
      tech === "Refrigeration & Air Conditioning Technology" &&
      shift === "2nd" &&
      semester === "2nd"
    ) {
      return Rac22  ;
    } else if (
      tech === "Refrigeration & Air Conditioning Technology" &&
      shift === "2nd" &&
      semester === "4th"
    ) {
      return Rac24  ;
    } else if (
      tech === "Refrigeration & Air Conditioning Technology" &&
      shift === "2nd" &&
      semester === "6th"
    ) {
      return Rac26  ;
    } else if (
      tech === "Electronics Technology" &&
      shift === "1st" &&
      semester === "2nd"
    ) {
      return Ent12  ;
    } else if (
      tech === "Electronics Technology" &&
      shift === "1st" &&
      semester === "4th"
    ) {
      return Ent14  ;
    } else if (
      tech === "Electronics Technology" &&
      shift === "1st" &&
      semester === "6th"
    ) {
      return Ent16  ;
    } else if (
      tech === "Electronics Technology" &&
      shift === "2nd" &&
      semester === "2nd"
    ) {
      return Ent22  ;
    } else if (
      tech === "Electronics Technology" &&
      shift === "2nd" &&
      semester === "4th"
    ) {
      return Ent24  ;
    } else if (
      tech === "Electronics Technology" &&
      shift === "2nd" &&
      semester === "6th"
    ) {
      return Ent26  ;
    } else if (
      tech === "Civil Technology" &&
      shift === "1st" &&
      semester === "2nd" &&
      group  === "A"
    ) {
      return Ct12a ;
    } else if (
      tech === "Civil Technology" &&
      shift === "1st" &&
      semester === "4th" &&
      group  === "A"
    ) {
      return Ct14a ;
    } else if (
      tech === "Civil Technology" &&
      shift === "1st" &&
      semester === "6th" &&
      group  === "A"
    ) {
      return Ct16a ;
    } else if (
      tech === "Civil Technology" &&
      shift === "2nd" &&
      semester === "2nd" &&
      group  === "A"
    ) {
      return Ct22a ;
    } else if (
      tech === "Civil Technology" &&
      shift === "2nd" &&
      semester === "4th" &&
      group  === "A"
    ) {
      return Ct24a ;
    } else if (
      tech === "Civil Technology" &&
      shift === "2nd" &&
      semester === "6th" &&
      group  === "A"
    ) {
      return Ct26a ;
    } else if (
      tech === "Civil Technology" &&
      shift === "1st" &&
      semester === "2nd" &&
      group  === "B"
    ) {
      return Ct12b;
    } else if (
      tech === "Civil Technology" &&
      shift === "1st" &&
      semester === "4th" &&
      group  === "B"
    ) {
      return Ct14b;
    } else if (
      tech === "Civil Technology" &&
      shift === "1st" &&
      semester === "6th" &&
      group  === "B"
    ) {
      return Ct16b;
    } else if (
      tech === "Civil Technology" &&
      shift === "2nd" &&
      semester === "2nd" &&
      group  === "B"
    ) {
      return Ct22b;
    } else if (
      tech === "Civil Technology" &&
      shift === "2nd" &&
      semester === "4th" &&
      group  === "B"
    ) {
      return Ct24b;
    } else if (
      tech === "Civil Technology" &&
      shift === "2nd" &&
      semester === "6th" &&
      group  === "B"
    ) {
      return Ct26b;
    } else if (
      tech === "Electrical Technology" &&
      shift === "1st" &&
      semester === "2nd" &&
      group  === "A"
    ) {
      return Et12a  ;
    } else if (
      tech === "Electrical Technology" &&
      shift === "1st" &&
      semester === "4th" &&
      group  === "A"
    ) {
      return Et14a  ;
    } else if (
      tech === "Electrical Technology" &&
      shift === "1st" &&
      semester === "6th" &&
      group  === "A"
    ) {
      return Et16a  ;
    } else if (
      tech === "Electrical Technology" &&
      shift === "2nd" &&
      semester === "2nd" &&
      group  === "A"
    ) {
      return Et22a  ;
    } else if (
      tech === "Electrical Technology" &&
      shift === "2nd" &&
      semester === "4th" &&
      group  === "A"
    ) {
      return Et24a  ;
    } else if (
      tech === "Electrical Technology" &&
      shift === "2nd" &&
      semester === "6th" &&
      group  === "A"
    ) {
      return Et26a  ;
    } else if (
      tech === "Electrical Technology" &&
      shift === "1st" &&
      semester === "2nd" &&
      group  === "B"
    ) {
     return Et12b;
    } else if (
      tech === "Electrical Technology" &&
      shift === "1st" &&
      semester === "4th" &&
      group  === "B"
    ) {
     return Et14b;
    } else if (
      tech === "Electrical Technology" &&
      shift === "1st" &&
      semester === "6th" &&
      group  === "B"
    ) {
     return Et16b;
    } else if (
      tech === "Electrical Technology" &&
      shift === "2nd" &&
      semester === "2nd" &&
      group  === "B"
    ) {
     return Et22b;
    } else if (
      tech === "Electrical Technology" &&
      shift === "2nd" &&
      semester === "4th" &&
      group  === "B"
    ) {
     return Et24b;
    } else if (
      tech === "Electrical Technology" &&
      shift === "2nd" &&
      semester === "6th" &&
      group  === "B"
    ) {
     return Et26b;
    } else if (
      tech === "Electrical Technology" &&
      shift === "1st" &&
      semester === "2nd" &&
      group  === "C"
    ) {
      return Et12c;
    } else if (
      tech === "Electrical Technology" &&
      shift === "1st" &&
      semester === "4th" &&
      group  === "C"
    ) {
      return Et14c;
    } else if (
      tech === "Electrical Technology" &&
      shift === "2nd" &&
      semester === "2nd" &&
      group  === "C"
    ) {
      return Et22c;
    } else if (
      tech === "Electrical Technology" &&
      shift === "2nd" &&
      semester === "4th" &&
      group  === "C"
    ) {
      return Et24c;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "1st" &&
      semester === "2nd" &&
      group  === "A"
    ) {
      return Mt12a;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "1st" &&
      semester === "4th" &&
      group  === "A"
    ) {
      return Mt14a;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "1st" &&
      semester === "6th" &&
      group  === "A"
    ) {
      return Mt16a;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "2nd" &&
      semester === "2nd" &&
      group  === "A"
    ) {
      return Mt22a;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "2nd" &&
      semester === "4th" &&
      group  === "A"
    ) {
      return Mt24a;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "2nd" &&
      semester === "6th" &&
      group  === "A"
    ) {
      return Mt26a;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "1st" &&
      semester === "2nd" &&
      group  === "B"
    ) {
      return Mt12b;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "1st" &&
      semester === "4th" &&
      group  === "B"
    ) {
      return Mt14b;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "1st" &&
      semester === "6th" &&
      group  === "B"
    ) {
      return Mt16b;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "2nd" &&
      semester === "2nd" &&
      group  === "B"
    ) {
      return Mt22b;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "2nd" &&
      semester === "4th" &&
      group  === "B"
    ) {
      return Mt24b;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "2nd" &&
      semester === "6th" &&
      group  === "B"
    ) {
      return Mt26b;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "1st" &&
      semester === "2nd" &&
      group  === "C"
    ) {
      return Mt12c;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "1st" &&
      semester === "4th" &&
      group  === "C"
    ) {
      return Mt14c;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "2nd" &&
      semester === "2nd" &&
      group  === "C"
    ) {
      return Mt22c;
    } else if (
      tech === "Mechanical Technology" &&
      shift === "2nd" &&
      semester === "4th" &&
      group  === "C"
    ) {
      return Mt24c;
    } else if (
      tech === "Mining & Mine Survey Technology" &&
      shift === "1st" &&
      semester === "6th"
    ) {
      return Mnt16;
    } else if (
      tech === "Mining & Mine Survey Technology" &&
      shift === "2nd" &&
      semester === "6th"
    ) {
      return Mnt26;
    }  else if (
      tech === "Tourism and Hospitality" &&
      shift === "1st" &&
      semester === "6th"
    ) {
      return Th16;
    } else if (
      tech === "Tourism and Hospitality" &&
      shift === "2nd" &&
      semester === "6th"
    ) {
      return Th26;
    } 
    
    else {
      if (find === "saved") {
        return notSaved
      }else {
        return notFind
      }
    }
  };

export default renderRoutine;

