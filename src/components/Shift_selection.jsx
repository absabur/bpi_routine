import React, { useContext } from "react";
import GlobalState from "./GlobalState";
import Footer from "./Footer";

const Shift_selection = () => {
  const { setsecond, second, third, setthird, routinePath, setroutinePath } = useContext(GlobalState);
  const handleShift = (shift) => {
    setsecond(!second);
    setthird(!third)
    setroutinePath(routinePath+shift)
  };
  return (
    <>
      <div className="nav_display">
        <button onClick={() => handleShift("1st")}>
          <h3>First Shift</h3>
        </button>
        <button onClick={() => handleShift("2nd")}>
          <h3>Second Shift</h3>
        </button>
      </div>
    </>
  );
};

export default Shift_selection;
