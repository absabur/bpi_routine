import React from 'react'

import { FaFacebook } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";

const IconSection = () => {
  return (
    <div className="icon-section">
          <h2 className="gradient__text">
            For any correction in routine knock me.
          </h2>
          <div className="icon">
            <a
              href="https://www.facebook.com/profile.php?id=100027012382655"
              target="blank"
            >
              <FaFacebook className="f-icon" />
            </a>
            <a href="mailto:absabur929@gmail.com" target="blank">
              <BiEnvelope className="g-icon" />
            </a>
          </div>
        </div>
  )
}

export default IconSection