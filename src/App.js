import React, { useState } from "react";

import GlobalState from "./components/GlobalState";
import Footer from "./components/Footer";
import RoutePath from "./components/RoutePath";
import IconSection from "./components/IconSection";

let refreshColor = localStorage.getItem("color");
let refreshBgColor = localStorage.getItem("bg");

function App() {
  const [rotate, setrotate] = useState({ transform: "" });
  const [color, setcolor] = useState({ color: refreshColor });
  const [bg, setbg] = useState({ backgroundColor: refreshBgColor });

  return (
    <div>
      <GlobalState.Provider
        value={{ color, setcolor, bg, setbg, rotate, setrotate, }}
      >
        <RoutePath />

        <IconSection />
        <Footer />
      </GlobalState.Provider>
    </div>
  );
}

export default App;
