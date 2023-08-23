import React, { useState } from 'react'
import Period from '../Routines/CommonPartTable/Period'
import Rotate from '../Routines/Styling/Rotate'
import CustomColor from '../Routines/Styling/CustomColor'
import { useContext } from 'react'
import GlobalState from './GlobalState'
import TimeDuration2 from '../Routines/CommonPartTable/TimeDuration2'
import TimeDuration1 from '../Routines/CommonPartTable/TimeDuration1'
import PresentClass from './PresentClass'

const Routine = ({routineData}) => {

  // let tech = localStorage.getItem("tech");
  // let shift = localStorage.getItem("shift");
  // let semester = localStorage.getItem("sem");
  // let grp = localStorage.getItem("group");

  let { tech, shift, semester, group } = useContext(GlobalState);

  let routineHead = (
    <>
      <p style={{textAlign: 'center', marginBottom: '1rem'}}>Depertment: {tech},<br /> </p>
      <div className='r-head'>
        <p>{shift} Shift,</p> 
        <p>{group ? <> Group {group},</> : null} </p> 
        <p>{semester} Semester</p>
      </div>
    </>
  );
  
  const tableHead = <>
    <Period />
    {shift==="1st"?<TimeDuration1 />:<TimeDuration2 />}
  </>

  const { color, bg, rotate, } = useContext(GlobalState);
  return (
    <div className="main">
      <Rotate />
      <div style={bg} className='r3-head'>
        <div className='r2-head' style={color}>{routineHead}</div>
      </div>
      {/* <PresentClass data={routineData}/> */}

      <div className="table" style={rotate}>
        {routineData && routineData[0][0].status === 404 ? null: tableHead}
        {
          routineData && routineData.map((row)=>(
            <div className='row'>
                {row && row.map((sub)=>(
                  <div className={`p ${sub.p}`} style={bg}>
                    <p style={color}>
                      {sub.subject} {sub.code?<>({sub.code})</>:null}<br />
                      {sub.room ? <span>Room: </span>: null}{sub.room}
                    </p>
                  </div>
                ))}
            </div>
          ))
        }
        
      </div>
      <CustomColor />
    </div>
  )
}

export default Routine