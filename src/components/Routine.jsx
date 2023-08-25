import React, { useState } from 'react'
import Period from './CommonPartTable/Period'
import Rotate from '../components/Styling/Rotate'
import CustomColor from '../components/Styling/CustomColor'
import { useContext } from 'react'
import TimeDuration2 from './CommonPartTable/TimeDuration2'
import TimeDuration1 from './CommonPartTable/TimeDuration1'
import ClearCache from './ClearCache'
import GlobalState from '../service/GlobalState'
import { ImCross } from "react-icons/im";

const Routine = ({routineData, tech, shift, semester, group}) => {
  const [value, setValue] = useState("")
  const [details, setDetails] = useState("hide")

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
  
  const handleClick = async (e) => {
    const val = await e.target.innerText
    setValue(val)
    if (val==="Room: ") {
      setDetails("hide")
    }else{
      setDetails("show")
    }
  }

  const tableHead = <>
    <Period />
    {shift==="1st"?<TimeDuration1 />:<TimeDuration2 />}
  </>

  const { color, bg, rotate, } = useContext(GlobalState);
  return (
    <div className="main">
      {routineData && routineData[0][0].status === 404 ? null: <Rotate />}
      {routineData && routineData[0][0].status === 404 ? null:
      <div style={bg} className='r3-head'>
        <div className='r2-head' style={color}>{routineHead}</div>
      </div>
      }

      <div style={bg} className={details}>
        <p style={color}>{value}</p>
        <ImCross className='details-cross' onClick={()=>setDetails("hide")}/>
      </div>

      <div className="table" style={rotate}>
        {routineData && routineData[0][0].status === 404 ? null: tableHead}
        {
          routineData && routineData.map((row)=>(
            <div className='row'>
                {row && row.map((sub)=>(
                  <div onClick={handleClick} className={`p ${sub.p}`} style={bg}>
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
      <ClearCache />
      <CustomColor />
    </div>
  )
}

export default Routine