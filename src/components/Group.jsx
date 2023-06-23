import React, { useContext } from "react";
import GlobalState from "./GlobalState";

const Group = () => {
  const { setsecond, second, third, setthird, routinePath, setroutinePath,routineHead, setroutineHead, fourth, setfourth, setshowGroup, showGroup } = useContext(GlobalState);
  const handleGroup = (e, shift) => {
    setfourth(!fourth)
    setshowGroup(!showGroup)
    setroutinePath(routinePath+shift)
    setroutineHead(routineHead+e)
  };
  return (
    <>
      <div className="nav_display">
        <button onClick={() => handleGroup("Group A","a")}>
          <h3>Group A</h3>
        </button>
        <button onClick={() => handleGroup("Group B","b")}>
          <h3>Group B</h3>
        </button>
        <button onClick={() => handleGroup("Group C","c")}>
          <h3>Group C</h3>
        </button>
      </div>
    </>
  );
};

export default Group;
