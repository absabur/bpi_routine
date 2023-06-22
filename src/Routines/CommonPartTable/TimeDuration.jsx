import React from 'react'
import { useContext } from 'react';
import GlobalState from '../../components/GlobalState';

const TimeDuration = () => {
    
  const { color, bg } = useContext(GlobalState);
  return (
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
  )
}

export default TimeDuration