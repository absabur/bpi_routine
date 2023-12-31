import React from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import logo from "../images/logo.png";
import Home from "./Home";
import Technology from "./Technology";
import ShiftSelection from "./Shift_selection";
import Error from "./Error";
import Group from "./Group";
import Semester from "./Semester";
import RenderRoutine from "./RenderRoutine";
import Time from "./Time";
import SaveRoutine from "./SaveRoutine";
import RenderSavedRoutine from "./RenderSavedRoutine";

const RoutePath = () => {
  return (
    <BrowserRouter>
      <div className="cap1">
        <div className="image">
          <img src={logo} alt="logo" />
          <div className="head-name">
            <h1>Bogra Polytechnic Institute.</h1>
            <h1>Class Routine</h1>
          </div>
        </div>
        <Home />
        <div style={{width:"100%", textAlign:"center", margin:"1rem 0"}}>
          <Link className='saveRoutine' to="/my-routine">
                My saved routine.
          </Link>
        </div>
      </div>
      <Time />
      <Routes>
        <Route path="/" element={<Technology />} />
        <Route path="/loaded-routine" element={<SaveRoutine />} />
        <Route path="/my-routine" element={<RenderSavedRoutine />} />

        <Route
          path="cst"
          element={
            <ShiftSelection technology="Computer Science and Technology" />
          }
        >
          <Route path="1st-shift" element={<Semester shift="1st" />}>
            <Route path="2nd-semester" element={<Group semester="2nd" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="4th-semester" element={<Group semester="4th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="6th-semester" element={<Group semester="6th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
          </Route>
          <Route path="2nd-shift" element={<Semester shift="2nd" />}>
            <Route path="2nd-semester" element={<Group semester="2nd" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="4th-semester" element={<Group semester="4th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="6th-semester" element={<Group semester="6th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
          </Route>
        </Route>

        <Route
          path="cmt"
          element={<ShiftSelection technology="Computer Technology" />}
        >
          <Route path="1st-shift" element={<Semester shift="1st" />}>
            <Route path="2nd-semester" element={<Group semester="2nd" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="4th-semester" element={<Group semester="4th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="6th-semester" element={<Group semester="6th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
          </Route>
          <Route path="2nd-shift" element={<Semester shift="2nd" />}>
            <Route path="2nd-semester" element={<Group semester="2nd" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="4th-semester" element={<Group semester="4th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="6th-semester" element={<Group semester="6th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
          </Route>
        </Route>

        <Route
          path="ct"
          element={<ShiftSelection technology="Civil Technology" />}
        >
          <Route path="1st-shift" element={<Semester shift="1st" />}>
            <Route path="2nd-semester" element={<Group semester="2nd" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="4th-semester" element={<Group semester="4th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="6th-semester" element={<Group semester="6th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
          </Route>
          <Route path="2nd-shift" element={<Semester shift="2nd" />}>
            <Route path="2nd-semester" element={<Group semester="2nd" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="4th-semester" element={<Group semester="4th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="6th-semester" element={<Group semester="6th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
          </Route>
        </Route>

        <Route
          path="et"
          element={<ShiftSelection technology="Electrical Technology" />}
        >
          <Route path="1st-shift" element={<Semester shift="1st" />}>
            <Route path="2nd-semester" element={<Group semester="2nd" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="4th-semester" element={<Group semester="4th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="6th-semester" element={<Group semester="6th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
          </Route>
          <Route path="2nd-shift" element={<Semester shift="2nd" />}>
            <Route path="2nd-semester" element={<Group semester="2nd" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="4th-semester" element={<Group semester="4th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="6th-semester" element={<Group semester="6th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
          </Route>
        </Route>

        <Route
          path="ent"
          element={<ShiftSelection technology="Electronics Technology" />}
        >
          <Route path="1st-shift" element={<Semester shift="1st" />}>
            <Route path="2nd-semester" element={<Group semester="2nd" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="4th-semester" element={<Group semester="4th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="6th-semester" element={<Group semester="6th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
          </Route>
          <Route path="2nd-shift" element={<Semester shift="2nd" />}>
            <Route path="2nd-semester" element={<Group semester="2nd" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="4th-semester" element={<Group semester="4th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="6th-semester" element={<Group semester="6th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
          </Route>
        </Route>

        <Route
          path="mt"
          element={<ShiftSelection technology="Mechanical Technology" />}
        >
          <Route path="1st-shift" element={<Semester shift="1st" />}>
            <Route path="2nd-semester" element={<Group semester="2nd" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="4th-semester" element={<Group semester="4th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="6th-semester" element={<Group semester="6th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
          </Route>
          <Route path="2nd-shift" element={<Semester shift="2nd" />}>
            <Route path="2nd-semester" element={<Group semester="2nd" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="4th-semester" element={<Group semester="4th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="6th-semester" element={<Group semester="6th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
          </Route>
        </Route>

        <Route
          path="pt"
          element={<ShiftSelection technology="Power Technology" />}
        >
          <Route path="1st-shift" element={<Semester shift="1st" />}>
            <Route path="2nd-semester" element={<Group semester="2nd" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="4th-semester" element={<Group semester="4th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="6th-semester" element={<Group semester="6th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
          </Route>
          <Route path="2nd-shift" element={<Semester shift="2nd" />}>
            <Route path="2nd-semester" element={<Group semester="2nd" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="4th-semester" element={<Group semester="4th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="6th-semester" element={<Group semester="6th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
          </Route>
        </Route>

        <Route
          path="rac"
          element={
            <ShiftSelection technology="Refrigeration & Air Conditioning Technology" />
          }
        >
          <Route path="1st-shift" element={<Semester shift="1st" />}>
            <Route path="2nd-semester" element={<Group semester="2nd" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="4th-semester" element={<Group semester="4th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="6th-semester" element={<Group semester="6th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
          </Route>
          <Route path="2nd-shift" element={<Semester shift="2nd" />}>
            <Route path="2nd-semester" element={<Group semester="2nd" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="4th-semester" element={<Group semester="4th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="6th-semester" element={<Group semester="6th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
          </Route>
        </Route>

        <Route
          path="mmst"
          element={<ShiftSelection technology="Mining & Mine Survey Technology" />}
        >
          <Route path="1st-shift" element={<Semester shift="1st" />}>
            <Route path="2nd-semester" element={<Group semester="2nd" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="4th-semester" element={<Group semester="4th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="6th-semester" element={<Group semester="6th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
          </Route>
          <Route path="2nd-shift" element={<Semester shift="2nd" />}>
            <Route path="2nd-semester" element={<Group semester="2nd" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="4th-semester" element={<Group semester="4th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
            <Route path="6th-semester" element={<Group semester="6th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
          </Route>
        </Route>

        <Route
          path="th"
          element={<ShiftSelection technology="Tourism and Hospitality" />}
        >
          <Route path="1st-shift" element={<Semester shift="1st" />}>
            <Route path="6th-semester" element={<Group semester="6th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
          </Route>
          <Route path="2nd-shift" element={<Semester shift="2nd" />}>
            <Route path="6th-semester" element={<Group semester="6th" />}>
              <Route path="group-a" element={<RenderRoutine group="A" />} />
              <Route path="group-b" element={<RenderRoutine group="B" />} />
              <Route path="group-c" element={<RenderRoutine group="C" />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutePath;
