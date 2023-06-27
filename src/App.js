import React, { useState } from "react";

import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Technology from "./components/Technology";
import GlobalState from "./components/GlobalState";
import ShiftSelection from "./components/Shift_selection";
import Semester from "./components/Semester";
import Footer from "./components/Footer";
import logo from "./images/logo.jpg";
import Group from "./components/Group";
import RenderRoutine from "./Routines/RenderRoutine";
import Home from "./components/Home";
import Error from "./components/Error";

let refreshColor = localStorage.getItem("color");
let refreshBgColor = localStorage.getItem("bg");

function App() {
  const [rotate, setrotate] = useState({ transform: "" });
  const [color, setcolor] = useState({ color: refreshColor });
  const [bg, setbg] = useState({ backgroundColor: refreshBgColor });

  return (
    <>
      <GlobalState.Provider
        value={{ color, setcolor, bg, setbg, rotate, setrotate }}
      >
        <BrowserRouter>
          <div className="cap1">
            <div className="image">
              <img src={logo} alt="logo" />
              <div>
                <h1>Bogra Polytechnic Institute.</h1>
                <br />
                <h1>Class Routine</h1>
              </div>
            </div>
            <Home />
          </div>
          <Routes>
            <Route path="/" element={<Technology />} />

            <Route
              path="cst"
              element={
                <ShiftSelection technology="Computer Science and Technology" />
              }
            >
              <Route path="1st-shift" element={<Semester shift="1st" />}>
                <Route path="2nd-semester" element={<Group semester="2nd" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="4th-semester" element={<Group semester="4th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="6th-semester" element={<Group semester="6th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
              </Route>
              <Route path="2nd-shift" element={<Semester shift="2nd" />}>
                <Route path="2nd-semester" element={<Group semester="2nd" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="4th-semester" element={<Group semester="4th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="6th-semester" element={<Group semester="6th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
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
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="4th-semester" element={<Group semester="4th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="6th-semester" element={<Group semester="6th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
              </Route>
              <Route path="2nd-shift" element={<Semester shift="2nd" />}>
                <Route path="2nd-semester" element={<Group semester="2nd" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="4th-semester" element={<Group semester="4th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="6th-semester" element={<Group semester="6th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
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
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="4th-semester" element={<Group semester="4th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="6th-semester" element={<Group semester="6th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
              </Route>
              <Route path="2nd-shift" element={<Semester shift="2nd" />}>
                <Route path="2nd-semester" element={<Group semester="2nd" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="4th-semester" element={<Group semester="4th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="6th-semester" element={<Group semester="6th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
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
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="4th-semester" element={<Group semester="4th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="6th-semester" element={<Group semester="6th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
              </Route>
              <Route path="2nd-shift" element={<Semester shift="2nd" />}>
                <Route path="2nd-semester" element={<Group semester="2nd" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="4th-semester" element={<Group semester="4th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="6th-semester" element={<Group semester="6th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
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
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="4th-semester" element={<Group semester="4th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="6th-semester" element={<Group semester="6th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
              </Route>
              <Route path="2nd-shift" element={<Semester shift="2nd" />}>
                <Route path="2nd-semester" element={<Group semester="2nd" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="4th-semester" element={<Group semester="4th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="6th-semester" element={<Group semester="6th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
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
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="4th-semester" element={<Group semester="4th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="6th-semester" element={<Group semester="6th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
              </Route>
              <Route path="2nd-shift" element={<Semester shift="2nd" />}>
                <Route path="2nd-semester" element={<Group semester="2nd" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="4th-semester" element={<Group semester="4th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="6th-semester" element={<Group semester="6th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
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
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="4th-semester" element={<Group semester="4th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="6th-semester" element={<Group semester="6th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
              </Route>
              <Route path="2nd-shift" element={<Semester shift="2nd" />}>
                <Route path="2nd-semester" element={<Group semester="2nd" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="4th-semester" element={<Group semester="4th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="6th-semester" element={<Group semester="6th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
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
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="4th-semester" element={<Group semester="4th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="6th-semester" element={<Group semester="6th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
              </Route>
              <Route path="2nd-shift" element={<Semester shift="2nd" />}>
                <Route path="2nd-semester" element={<Group semester="2nd" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="4th-semester" element={<Group semester="4th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="6th-semester" element={<Group semester="6th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
              </Route>
            </Route>

            <Route
              path="mnt"
              element={<ShiftSelection technology="Mining Technology" />}
            >
              <Route path="1st-shift" element={<Semester shift="1st" />}>
                <Route path="2nd-semester" element={<Group semester="2nd" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="4th-semester" element={<Group semester="4th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="6th-semester" element={<Group semester="6th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
              </Route>
              <Route path="2nd-shift" element={<Semester shift="2nd" />}>
                <Route path="2nd-semester" element={<Group semester="2nd" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="4th-semester" element={<Group semester="4th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="6th-semester" element={<Group semester="6th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
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
                <Route path="2nd-semester" element={<Group semester="2nd" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="4th-semester" element={<Group semester="4th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="6th-semester" element={<Group semester="6th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
              </Route>
              <Route path="2nd-shift" element={<Semester shift="2nd" />}>
                <Route path="2nd-semester" element={<Group semester="2nd" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="4th-semester" element={<Group semester="4th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
                <Route path="6th-semester" element={<Group semester="6th" />}>
                  <Route path="no-group" element={<RenderRoutine group="" />} />
                  <Route path="group-a" element={<RenderRoutine group="A" />} />
                  <Route path="group-b" element={<RenderRoutine group="B" />} />
                  <Route path="group-c" element={<RenderRoutine group="C" />} />
                </Route>
              </Route>
            </Route>

            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>

        <div className="icon-section">
          <h1 className="gradient__text">
            For any correction in routine knock me.
          </h1>
          <div className="icon">
            <a
              href="https://www.facebook.com/profile.php?id=100027012382655"
              target="blank"
            >
              <FaFacebook className="f-icon" />
            </a>
            <a href="mailto:absabur929@gmail.com" target="blank">
              <SiGmail className="g-icon" />
            </a>
          </div>
        </div>
        <Footer />
      </GlobalState.Provider>
    </>
  );
}

export default App;