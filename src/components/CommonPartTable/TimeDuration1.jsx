import React from 'react'
import { useContext } from 'react';
import GlobalState from '../../service/GlobalState';

const TimeDuration1 = () => {
    

    const { color, bg } = useContext(GlobalState);

  return (

    <div className="row">
        <div className="p1 h" style={bg}>
            <p style={color}>DAY / TIME</p>
        </div>
        <div className="p1 h" style={bg}>
            <p style={color}>8:00-8:45</p>
        </div>
        <div className="p1 h" style={bg}>
            <p style={color}>8:45-9:30</p>
        </div>
        <div className="p1 h" style={bg}>
            <p style={color}>9:30-10:15</p>
        </div>
        <div className="p1 h" style={bg}>
            <p style={color}>10:15-11:00</p>
        </div>
        <div className="p1 h" style={bg}>
            <p style={color}>11:00-11:45</p>
        </div>
        <div className="p1 h" style={bg}>
            <p style={color}>11:45-12:30</p>
        </div>
        <div className="p1 h" style={bg}>
            <p style={color}>12:30-1:15</p>
        </div>
    </div>
  )
}

export default TimeDuration1