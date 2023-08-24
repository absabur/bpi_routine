import React, { useState } from "react";

import Footer from "./components/Footer";
import RoutePath from "./components/RoutePath";
import IconSection from "./components/IconSection";
import GlobalState from "./service/GlobalState";

let refreshColor = localStorage.getItem("color");
let refreshBgColor = localStorage.getItem("bg");

function App() {
  const [rotate, setrotate] = useState({ transform: "" });
  const [color, setcolor] = useState({ color: refreshColor });
  const [bg, setbg] = useState({ backgroundColor: refreshBgColor });
  const [tech, setTech] = useState("");
  const [shift, setShift] = useState("");
  const [semester, setSemester] = useState("");
  const [group, setGroup] = useState("");

  return (
    <div>
      <GlobalState.Provider
        value={{ color, setcolor, bg, setbg, rotate, setrotate, tech, setTech, shift, setShift, semester, setSemester, group, setGroup }}
      >
        <RoutePath />

        <IconSection />
        <Footer />
      </GlobalState.Provider>
    </div>
  );
}

export default App;
