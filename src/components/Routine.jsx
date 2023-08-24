import React from 'react'
import Period from './CommonPartTable/Period'
import Rotate from '../components/Styling/Rotate'
import CustomColor from '../components/Styling/CustomColor'
import { useContext } from 'react'
import TimeDuration2 from './CommonPartTable/TimeDuration2'
import TimeDuration1 from './CommonPartTable/TimeDuration1'
import GlobalState from '../service/GlobalState'

const Routine = ({routineData, tech, shift, semester, group}) => {

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