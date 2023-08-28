import React, { useState } from 'react'
import Period from './CommonPartTable/Period'
import Rotate from '../components/Styling/Rotate'
import CustomColor from '../components/Styling/CustomColor'
import { useContext } from 'react'
import TimeDuration from './CommonPartTable/TimeDuration'
import GlobalState from '../service/GlobalState'
import { ImCross } from "react-icons/im";

const Routine = ({routineData, tech, shift, semester, group}) => {
  const [value, setValue] = useState("")
  const [details, setDetails] = useState("hide")
  const [active, setActive] = useState('')

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
  
  const handleClick = async (e, sub) => {
    const val = await e.target.textContent
    setValue(val)
    if (val==="Room: " || val==="Subject: SUNDAY, , " || val==="Subject: MONDAY, , " || val==="Subject: TUESDAY, , " || val==="Subject: WEDNESDAY, , " || val==="Subject: THURSDAY, , ") {
      setDetails("hide")
    }else{
      setDetails("show")
    }
  }

  setInterval(() => {
    let date = new Date();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = weekday[date.getDay()].toUpperCase();
    setActive(day)
  }, 1000);
  


  const tableHead = <>
    <Period />
    <TimeDuration shift={shift} />
  </>

  const { color, bg, rotate, activeBg} = useContext(GlobalState);
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

      <div className={`table ${rotate}`}>
        {routineData && routineData[0][0].status === 404 ? null: tableHead}
        {
          routineData && routineData.map((row)=>(
            <div className='row'>
              {row && row.map((sub)=>(
                <div onClick={handleClick} className={`p ${sub.p}`} style={sub.subject===active?activeBg:bg}>
                  <p style={color}>
                    <span style={{display: "none"}}>Subject: </span>{sub.subject}<span style={{display: "none"}}>,</span> {sub.code?<span style={{display: "none"}}>Code: {sub.code}</span>:null}<br />
                    {sub.teacher?<span style={{display: 'none'}}>, Teacher: {sub.teacher}</span>: null}
                    <span style={{display: "none"}}>, </span>{sub.room ? <span>Room: </span>: null}{sub.room}
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