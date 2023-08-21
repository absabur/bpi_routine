import React from "react";

import { Link, Outlet } from "react-router-dom";
import { BsArrowDownShort } from "react-icons/bs";
import Search from "./Search";
import { useState } from "react";

const technology = [
  {
    nam: "Computer Science and Technology",
    to: "cst",
  },
  {
    nam: "Computer Technology",
    to: "cmt",
  },
  {
    nam: "Civil Technology",
    to: "ct",
  },
  {
    nam: "Mechanical Technology",
    to: "mt",
  },
  {
    nam: "Electrical Technology",
    to: "et",
  },
  {
    nam: "Electronics Technology",
    to: "ent",
  },
  {
    nam: "Power Technology",
    to: "pt",
  },
  {
    nam: "Refrigeration & Air Conditioning Technology",
    to: "rac",
  },
  {
    nam: "Mining Technology",
    to: "mmst",
  },
  {
    nam: "Tourism and Hospitality",
    to: "th",
  },
];

const Technology = () => {
  const [filterTechArray, setfilterTechArray] = useState(technology);

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newTech =
      technology &&
      technology.filter((tech) => {
        const techName = tech.nam.toLowerCase();
        return techName.startsWith(value);
      });
    setfilterTechArray(newTech);
  };
  return (
    <>
      <div className="nav_display">
        <h1 className="head">
          <div>
            <BsArrowDownShort />
            Select Your Technology
            <BsArrowDownShort />
          </div>
          <Search onSearch={handleSearch} />
        </h1>
        {filterTechArray.map((tech) => (
          <>
            <Link key={new Date().toString()} to={tech.to}>
              <h3>{tech.nam}</h3>
            </Link>
          </>
        ))}
        {/* <Link to="th">
          <h3>Tourism and Hospitality</h3>
        </Link> */}
      </div>
      <Outlet />
    </>
  );
};

export default Technology;
