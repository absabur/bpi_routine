import React from 'react'
import { Link } from 'react-router-dom'

const LodadedRoutine = () => {

  return (
    <>
        <Link className='saveRoutine' to="loaded-routine">
            Last visited routine.
        </Link>
    </>
  )
}

export default LodadedRoutine