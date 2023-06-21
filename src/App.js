import React, { useState } from "react";

import { FaFacebook } from "react-icons/fa";
import Marquee from "react-fast-marquee";

import Technology from "./components/Technology";
import GlobalState from "./components/GlobalState";
import Shift_selection from "./components/Shift_selection";
import Semester from "./components/Semester";
import ShowRoutine from "./components/ShowRoutine";
import Footer from "./components/Footer";
import logo from './images/logo.jpg'

function App() {
  const [first, setfirst] = useState(true);
  const [second, setsecond] = useState(false);
  const [third, setthird] = useState(false)
  const [fourth, setfourth] = useState(false)
  const [routinePath, setroutinePath] = useState('')

  
  const [color, setcolor] = useState({color:'white'})
  const [bg, setbg] = useState({backgroundColor:'black'})

  return (
    <>
      <GlobalState.Provider
        value={{ first, setfirst, second, setsecond, third, setthird, fourth, setfourth, routinePath,setroutinePath,color, setcolor, bg, setbg }}
      >
        <div className="cap1">
          <img src={logo} alt="logo" />
          <h1>Bogra Polytechnic Institute</h1>
          <h1>Class Routine</h1>
        </div>

        <Marquee className="gradient__text">
          For any correction in routine knock me. 
          <a 
          href="https://www.facebook.com/profile.php?id=100027012382655"
          target="blank"><FaFacebook className="f-icon" />
          </a>
        </Marquee>

        {first ? <Technology /> : null}
        {second ? <Shift_selection /> : null}
        {third ? <Semester /> : null}
        {fourth ? <ShowRoutine /> : null}
        <Footer />
      </GlobalState.Provider>
    </>
  );
}

export default App;
