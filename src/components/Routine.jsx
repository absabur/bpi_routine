import React from 'react'
import TimeDuration from '../Routines/CommonPartTable/TimeDuration'
import Period from '../Routines/CommonPartTable/Period'
import Rotate from '../Routines/Styling/Rotate'
import CustomColor from '../Routines/Styling/CustomColor'
import { useContext } from 'react'
import GlobalState from './GlobalState'

const Routine = ({routineData}) => {
let tech = localStorage.getItem("tech");
  let shift = localStorage.getItem("shift");
  let sem = localStorage.getItem("sem");
  let grp = localStorage.getItem("group");

  let routineHead = (
    <>
      Depertment: {tech},<br /> {shift} Shift, {sem} Semester
      {grp ? <>, Group {grp}</> : null}
    </>
  );

  const { color, bg, rotate } = useContext(GlobalState);
  return (
    <div className="main">
      <Rotate />
      <div style={bg} className="cap">
        <p style={color}>{routineHead}</p>
      </div>

      <div className="table" style={rotate}>
        <Period />
        <TimeDuration />
        {
            routineData && routineData.map((row)=>(
                <div className='row'>
                    {row && row.map((sub)=>(
                        <div className={`p ${sub.p}`} style={bg}>
                            <p style={color}>
                                {sub.subject} <br />
                                {sub.room}
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