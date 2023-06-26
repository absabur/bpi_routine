import React from "react";
import { Link } from "react-router-dom";

import { ImHome } from "react-icons/im";

const Home = () => {
  return (
    <div className="" style={{ marginBottom: "1rem" }}>
      <Link
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding:"1rem",
          backgroundColor:"lightgreen",
          borderRadius:"10px"
        }}
        to="/"
      >
        <ImHome style={{ height:"35px", width:"35px"}} />
      </Link>
    </div>
  );
};

export default Home;
