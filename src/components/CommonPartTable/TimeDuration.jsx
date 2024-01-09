import React, { useContext, useState } from 'react'
import GlobalState from '../../service/GlobalState';
import shift1 from './shift1'
import shift2 from './shift2'
import activeTime from "../../service/activeTime"

const TimeDuration = ({shift}) => {
    const [active, setActive] = useState(null)
    const { color, bg, activeBg } = useContext(GlobalState);

    setInterval(() => {
        setActive(activeTime)
    }, 1000);

    if (shift==="1st") {
        return(
            <div className='row'>
                {shift1.map((time)=>(
                    <div key={Math.random()} className={`h ${time.p}`} style={time.subject===active?activeBg:bg}>
                        <p style={color}>
                            {time.subject}
                        </p>
                    </div>
                ))}
            </div>
        )
    }else {
        return(
            <div className='row'>
                {shift2.map((time)=>(
                    <div key={Math.random()} className={`h ${time.p}`} style={time.subject===active?activeBg:bg}>
                        <p style={color}>
                            {time.subject}
                        </p>
                    </div>
                ))}
            </div>
        )
    }
}

export default TimeDuration