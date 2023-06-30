import React from "react";
import { Link } from "react-router-dom";

import { ImHome } from "react-icons/im";

const Home = () => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <Link
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding:"1rem",
          backgroundColor:"black",
          borderRadius:"10px",
          boxShadow: "0 0 20px white"
        }}
        to="/"
      >
        <ImHome style={{ height:"35px", width:"35px", color:"rgb(0, 255, 106)"}} />
      </Link>
    </div>
  );
};

export default Home;
