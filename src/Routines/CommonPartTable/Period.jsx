import React from 'react'
import { useContext } from 'react';
import GlobalState from '../../components/GlobalState';

const Period = () => {
    
  const { color, bg } = useContext(GlobalState);
  return (
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
  )
}

export default Period