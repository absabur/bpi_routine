import React, { useContext, useState } from 'react'
import GlobalState from '../../service/GlobalState';

const Rotate = () => {
    const {rotate, setrotate} = useContext(GlobalState)
    const [toggle, setToggle] = useState(false)

  const portrait = async(e) => {
    if (!toggle) {
      setrotate("rotate");
    } else {
      setrotate("");
    }
    await setToggle(!toggle)
  };
  return (
    <button className="landscape" onClick={portrait} type="button">
        {rotate==="rotate"?<>Potrait</>:<>Landscape</>}
    </button>
  )
}

export default Rotate