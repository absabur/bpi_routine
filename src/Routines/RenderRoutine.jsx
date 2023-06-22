import React, { useContext } from 'react';

import {Cst_1_2, Cst_1_4, Cst_1_6, Cst_2_2, Cst_2_4, Cst_2_6,  Cmt_1_2, Cmt_1_4, Cmt_1_6, Cmt_2_2, Cmt_2_4, Cmt_2_6} from '../Routines/index';
import GlobalState from '../components/GlobalState';
import "./Styling/routine.css";


const RenderRoutine = () => {
    const {routinePath} = useContext(GlobalState)

    const renderRoutine = () => {
        if (routinePath == "cst1st2nd") {
          return <Cst_1_2 />
        }else if (routinePath == "cst1st4th") {
          return <Cst_1_4 />
        }else if (routinePath == "cst1st6th") {
          return <Cst_1_6 />
        }else if (routinePath == "cst2nd2nd") {
          return <Cst_2_2 />
        }else if (routinePath == "cst2nd4th") {
          return <Cst_2_4 />
        }else if (routinePath == "cst2nd6th") {
          return <Cst_2_6 />
        }else if (routinePath == "cmt1st2nd") {
          return <Cmt_1_2 />
        }else if (routinePath == "cmt1st4th") {
          return <Cmt_1_4 />
        }else if (routinePath == "cmt1st6th") {
          return <Cmt_1_6 />
        }else if (routinePath == "cmt2nd2nd") {
          return <Cmt_2_2 />
        }else if (routinePath == "cmt2nd4th") {
          return <Cmt_2_4 />
        }else if (routinePath == "cmt2nd6th") {
          return <Cmt_2_6 />
        }else{
          return <p>Routine can not find.</p>
        }
      }
  return (
    <div>
        {
            renderRoutine()
        }
    </div>
  )
}

export default RenderRoutine