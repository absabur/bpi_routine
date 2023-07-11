import React from "react";
import { Link } from "react-router-dom";

import { ImHome } from "react-icons/im";

const Home = () => {

  return (
    <div>
      <Link
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding:"0.5rem",
          backgroundColor:"white",
          borderRadius:"10px",
          boxShadow: "0 0 20px black"
        }}
        to="/"
      >
        <ImHome style={{ height:"35px", width:"35px", color:"rgb(54, 0, 18)"}} />
      </Link>
    </div>
  );
};

export default Home;
