import React, { useContext } from 'react'
import GlobalState from './GlobalState'
import Footer from './Footer'

const Semester = () => {

    const {third, setthird, fourth, setfourth, routinePath, setroutinePath} = useContext(GlobalState)
    const handleSemester = (semester) => {
        setthird(!third)
        setfourth(!fourth)
        setroutinePath(routinePath+semester)
        // console.log(routinePath);
    }
  return (
    <>
      <div className='nav_display'>
            <button onClick={() => handleSemester("2nd")}><h3>2nd Semester</h3></button>
      
            <button onClick={() => handleSemester("4th")}><h3>4th Semester</h3></button>
    
            <button onClick={() => handleSemester("6th")}><h3>6th Semester</h3></button>
      </div>
    </>
  )
}

export default Semester