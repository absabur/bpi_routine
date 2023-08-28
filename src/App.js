import React, { useState } from "react";

import Footer from "./components/Footer";
import RoutePath from "./components/RoutePath";
import IconSection from "./components/IconSection";
import GlobalState from "./service/GlobalState";

let refreshColor = localStorage.getItem("color");
let refreshBgColor = localStorage.getItem("bg");

function App() {
  const [rotate, setrotate] = useState("");
  const [color, setcolor] = useState({ color: refreshColor });
  const [bg, setbg] = useState({ backgroundColor: refreshBgColor });
  const [activeBg, setActiveBg] = useState({ backgroundColor: refreshBgColor, zIndex: "10", border: "2px solid white", boxShadow: "0 0 1px 2px red"});
  const [tech, setTech] = useState("");
  const [shift, setShift] = useState("");
  const [semester, setSemester] = useState("");
  const [group, setGroup] = useState("");


  return (
    <div style={{minHeight: "100vh", height: "min-contect"}}>
      <GlobalState.Provider
        value={{ color, setcolor, bg, setbg, activeBg, setActiveBg, rotate, setrotate, tech, setTech, shift, setShift, semester, setSemester, group, setGroup }}
      >

        <RoutePath />

        <IconSection />
        <Footer />
      </GlobalState.Provider>
    </div>
  );
}

export default App;
