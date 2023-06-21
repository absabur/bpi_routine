import React, { useContext, useState } from "react";
import CustomColor from "./CustomColor";
import GlobalState from "../components/GlobalState";
import Footer from "../components/Footer";
import { GiTireIronCross } from "react-icons/gi";
// import style from "./customcss";

const Cst_1_2 = () => {
  const { color, bg } = useContext(GlobalState);
  const [rotate, setrotate] = useState({ transform: "" });

  const portrait = (e) => {
    if (e.target.textContent == "Potrait") {
      e.target.innerHTML = "Landscape";
      setrotate(() => {
        return { transform: "rotate(0deg) scale(0.28)" };
      });
    } else {
      e.target.innerHTML = "Potrait";
      setrotate(() => {
        return { transform: "rotate(90deg) scale(0.45)" };
      });
    }
  };

  return (
    <div className="main">
      <div className="cap">
        <img src="../../../images/logo.jpg" alt="" />
        Department: Computer Science & Technology
        <br />
        <br />
        2nd Semester , 1st Shift
      </div>

      <CustomColor />

      <button className="landscape" onClick={portrait} type="button">
        Landscape
      </button>

      <table style={rotate}>
        <tr className="b">
          <th>
            <p style={bg}>
              <span style={color}>Period</span>
            </p>
          </th>
          <th>
            <p style={bg}>
              <span style={color}>1st</span>
            </p>
          </th>
          <th>
            <p style={bg}>
              <span style={color}>2nd</span>
            </p>
          </th>
          <th>
            <p style={bg}>
              <span style={color}>3rd</span>
            </p>
          </th>

          <th>
            <p style={bg}>
              <span style={color}>4th</span>
            </p>
          </th>

          <th>
            <p style={bg}>
              <span style={color}>5th</span>
            </p>
          </th>

          <th>
            <p style={bg}>
              <span style={color}>6th</span>
            </p>
          </th>

          <th>
            <p style={bg}>
              <span style={color}>7th</span>
            </p>
          </th>
        </tr>

        <tr>
          <td>
            <p style={bg}>
              <span style={color}>DAY / TIME</span>
            </p>
          </td>
          <td>
            <p style={bg}>
              <span style={color}>1:30-2:15</span>
            </p>
          </td>
          <td>
            <p style={bg}>
              <span style={color}>2:15-3:00</span>
            </p>
          </td>
          <td>
            <p style={bg}>
              <span style={color}>3:00-3:45</span>
            </p>
          </td>

          <td>
            <p style={bg}>
              <span style={color}>3:45-4:30</span>
            </p>
          </td>

          <td>
            <p style={bg}>
              <span style={color}>4:30-5:15</span>
            </p>
          </td>

          <td>
            <p style={bg}>
              <span style={color}>5:15-6:00</span>
            </p>
          </td>

          <td>
            <p style={bg}>
              <span style={color}>6:00-6:45</span>
            </p>
          </td>
        </tr>

        <tr className="b">
          <td>
            <p style={bg}>
              <span style={color}>SUNDAY</span>
            </p>
          </td>

          <td colSpan="3">
            <p style={bg}>
              <span style={color}>
                Digital Electronics-I <br />
                Room: 31
              </span>
            </p>
          </td>
          <td>
            <p style={bg}>
              <span style={color}>
                IT Suppurt Services <br />
                Room: 130
              </span>
            </p>
          </td>
          <td>
            <p style={bg}>
              <span style={color}>
                Application Development Using Python <br />
                Room: 130
              </span>
            </p>
          </td>
          <td colSpan="2">
            <p style={bg}>
              <span style={color}>
                Physics-II <br />
                Room: 1306
              </span>
            </p>
          </td>
        </tr>

        <tr>
          <td>
            <p style={bg}>
              <span style={color}>MONDAY</span>
            </p>
          </td>

          <td colSpan="3">
            <p style={bg}>
              <span style={color}>
                Computer Graphics Design-II <br />
                Room: Apps Lab
              </span>
            </p>
          </td>
          <td>
            <p style={bg}>
              <span style={color}>
                Physics-II <br />
                Room: 1208
              </span>
            </p>
          </td>
          <td colSpan="3">
            <p style={bg}>
              <span style={color}>
                Application Development Using Python <br />
                Room: 1208
              </span>
            </p>
          </td>
        </tr>

        <tr className="b">
          <td>
            <p style={bg}>
              <span style={color}>TUESDAY</span>
            </p>
          </td>

          <td colSpan="3">
            <p style={bg}>
              <span style={color}>
                Physics-II <br />
                Room: 304/301
              </span>
            </p>
          </td>
          <td>
            <p style={bg}>
              <span style={color}>
                Digital Electronics-I <br />
                Room: 1308
              </span>
            </p>
          </td>
          <td>
            <p style={bg}>
              <span style={color}>
                IT Suppurt Services <br />
                Room: 1404
              </span>
            </p>
          </td>
          <td>
            <p style={bg}>
              <span style={color}>
                Mathematics-III <br />
                Room: 1404
              </span>
            </p>
          </td>
          <td>
            <p style={bg}>
              <span style={color}>
                <GiTireIronCross />
              </span>
            </p>
          </td>
        </tr>

        <tr>
          <td>
            <p style={bg}>
              <span style={color}>WEDNESDAY</span>
            </p>
          </td>

          <td colSpan="3">
            <p style={bg}>
              <span style={color}>
                IT Suppurt Services <br />
                Room: Apps Lab
              </span>
            </p>
          </td>
          <td>
            <p style={bg}>
              <span style={color}>
                Application Development Using Python <br />
                Room: Apps Lab
              </span>
            </p>
          </td>
          <td>
            <p style={bg}>
              <span style={color}>
                Mathematics-III <br />
                Room: 1304
              </span>
            </p>
          </td>
          <td>
            <p style={bg}>
              <span style={color}>
                <GiTireIronCross />
              </span>
            </p>
          </td>
          <td>
            <p style={bg}>
              <span style={color}>
                <GiTireIronCross />
              </span>
            </p>
          </td>
        </tr>

        <tr className="b">
          <td>
            <p style={bg}>
              <span style={color}>THURSDAY</span>
            </p>
          </td>

          <td>
            <p style={bg}>
              <span style={color}>
                Digital Electronics-I <br />
                Room: 1104
              </span>
            </p>
          </td>
          <td colSpan="2">
            <p style={bg}>
              <span style={color}>
                Social Science <br />
                Room: 1104
              </span>
            </p>
          </td>
          <td colSpan="4">
            <p style={bg}>
              <span style={color}>
                {" "}
                Mathematics-III <br />
                Room: 1305
              </span>
            </p>
          </td>
        </tr>
      </table>

    </div>
  );
};

export default Cst_1_2;
