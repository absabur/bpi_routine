import React, { useContext } from 'react'
import GlobalState from '../../service/GlobalState';

const Rotate = () => {
    const {setrotate} = useContext(GlobalState)

  const portrait = (e) => {
    if (e.target.textContent === "Potrait") {
      e.target.innerHTML = "Landscape";
      setrotate(() => {
        return { transform: "rotate(0deg) scale(1)" };
      });
    } else {
      e.target.innerHTML = "Potrait";
      setrotate(() => {
        return { transform: "rotate(90deg) scale(1.2) scaleX(1.4)", margin: "16.5rem auto" };
      });
    }
  };
  return (
    <button className="landscape" onClick={portrait} type="button">
        Landscape
    </button>
  )
}

export default Rotate