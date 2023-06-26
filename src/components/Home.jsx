import React from "react";
import { Link } from "react-router-dom";

import { ImHome } from "react-icons/im";

const Home = () => {
  return (
    <div className="nav_display" style={{ marginBottom: "1rem" }}>
      <Link
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        to="/"
      >
        <h3 style={{ backgroundColor: "white", width: "4rem" }}>
          <ImHome />
        </h3>
      </Link>
    </div>
  );
};

export default Home;
