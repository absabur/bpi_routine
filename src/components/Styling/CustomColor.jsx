import React, { useContext } from "react";

import "../../Routines/routine.css";
import GlobalState from "../../service/GlobalState";

const CustomColor = () => {
  const { color, bg, setcolor, setbg, setActiveBg } = useContext(GlobalState);

  const handleColorChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    localStorage.setItem('color', value);
    setcolor(() => {
      return { [name]: event.target.value };
    });
  };

  const handlebgChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    localStorage.setItem('bg', value);
    setbg(() => {
      return { [name]: event.target.value };
    });
    setActiveBg(() => {
      return { [name]: event.target.value , zIndex: "10", border: "2px solid white", boxShadow: "0 0 1px 2px red"};
    });
  };

  return (
    <div className="color-sec">
      <h2>Set Colour</h2>
      <div className="colorInput">
        <label htmlFor="color">Text Colour : </label>
        <input
          type="color"
          id="color"
          name="color"
          value={color.color}
          onChange={handleColorChange}
        />
      </div>
      <div className="colorInput">
        <label htmlFor="bg_color">Background Colour : </label>
        <input
          type="color"
          id="bg_color"
          name="backgroundColor"
          value={bg.backgroundColor}
          onChange={handlebgChange}
        />
      </div>
    </div>
  );
};

export default CustomColor;
