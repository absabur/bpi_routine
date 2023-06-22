import React, { useContext } from "react";
import CustomColor from "./Styling/CustomColor";
import GlobalState from "../components/GlobalState";
import { GiTireIronCross } from "react-icons/gi";
import Rotate from "./Styling/Rotate";
import Period from "./CommonPartTable/Period";
import TimeDuration from "./CommonPartTable/TimeDuration";

const Cst_2_6 = () => {
  const { color, bg, rotate, routineHead } = useContext(GlobalState);

  return (
    <div className="main">

      <CustomColor />
      <Rotate />
      
      <div className="cap">
        <p>{routineHead}</p>
      </div>

      <table style={rotate}>
        <Period />
        <TimeDuration />

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


export default Cst_2_6;