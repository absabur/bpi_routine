import React, { useContext } from "react";

import GlobalState from "./GlobalState";
import Footer from "./Footer";

const Technology = () => {
  const { first, setfirst, second, setsecond, routinePath, setroutinePath } =
    useContext(GlobalState);

  const handleSub = (sub) => {
    setfirst(!first);
    setsecond(!second);
    setroutinePath(routinePath+sub)
  };

  return (
    <>
      <div className="nav_display">
        <button onClick={() => handleSub("cst")}>
          <h3>Computer Science and Technology</h3>
        </button>
        <button onClick={() => handleSub("et")}>
          <h3>Electrical Technology</h3>
        </button>
        <button onClick={() => handleSub("cmt")}>
          <h3>Computer Technology</h3>
        </button>
        <button onClick={() => handleSub("ct")}>
          <h3>Civil Technology</h3>
        </button>
        <button onClick={() => handleSub("mt")}>
          <h3>Mechanical Technology</h3>
        </button>
        <button onClick={() => handleSub("pt")}>
          <h3>Power Technology</h3>
        </button>
        <button onClick={() => handleSub("rac")}>
          <h3>Refrigeration & Air Conditioning Technology</h3>
        </button>
        <button onClick={() => handleSub("ent")}>
          <h3>Electronics Technology</h3>
        </button>
        <button onClick={() => handleSub("mnt")}>
          <h3>Mining Technology</h3>
        </button>
        <button onClick={() => handleSub("th")}>
          <h3>Tourism and Hospitality</h3>
        </button>
      </div>
    </>
  );
};

export default Technology;
