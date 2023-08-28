import React, { useContext } from 'react'
import GlobalState from '../../service/GlobalState';

const Rotate = () => {
    const {setrotate} = useContext(GlobalState)

  const portrait = (e) => {
    if (e.target.textContent === "Potrait") {
      e.target.innerHTML = "Landscape";
      setrotate("");
    } else {
      e.target.innerHTML = "Potrait";
      setrotate("rotate");
    }
  };
  return (
    <button className="landscape" onClick={portrait} type="button">
        Landscape
    </button>
  )
}

export default Rotate