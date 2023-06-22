import React, { useContext } from 'react'
import GlobalState from '../../components/GlobalState';

const Rotate = () => {
    const {rotate, setrotate} = useContext(GlobalState)

  const portrait = (e) => {
    if (e.target.textContent == "Potrait") {
      e.target.innerHTML = "Landscape";
      setrotate(() => {
        return { transform: "rotate(0deg) scale(0.26)" };
      });
    } else {
      e.target.innerHTML = "Potrait";
      setrotate(() => {
        return { transform: "rotate(90deg) scale(0.48)" };
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