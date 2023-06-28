import React from 'react'

import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const IconSection = () => {
  return (
    <div className="icon-section">
          <h1 className="gradient__text">
            For any correction in routine knock me.
          </h1>
          <div className="icon">
            <a
              href="https://www.facebook.com/profile.php?id=100027012382655"
              target="blank"
            >
              <FaFacebook className="f-icon" />
            </a>
            <a href="mailto:absabur929@gmail.com" target="blank">
              <SiGmail className="g-icon" />
            </a>
          </div>
        </div>
  )
}

export default IconSection