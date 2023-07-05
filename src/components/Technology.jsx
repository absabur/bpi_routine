import React from "react";

import { Link, Outlet } from "react-router-dom";
import { BsArrowDownShort } from "react-icons/bs";
import Search from "./Search";
import { useState } from "react";



const technology = [
  {
    nam : 'Computer Science and Technology',
    to :'cst'
  },
  {
    nam : 'Electrical Technology',
    to : 'et'
  },
  {
    nam : 'Computer Technology',
    to : 'cmt'
  },
  {
    nam : 'Civil Technology',
    to : 'ct'
  },
  {
    nam : 'Mechanical Technology',
    to : 'mt'
  },
  {
    nam : 'Power Technology',
    to : 'pt'
  },
  {
    nam : 'Refrigeration & Air Conditioning Technology',
    to : 'rac'
  },
  {
    nam : 'Electronics Technology',
    to : 'ent'
  },
  {
    nam : 'Mining Technology',
    to : 'mnt'
  }
]

const Technology = () => {
  const [filterTechArray, setfilterTechArray] = useState(technology)

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newTech = technology && technology.filter((tech)=>{
      const techName = tech.nam.toLowerCase();
      return techName.startsWith(value)
    })
    setfilterTechArray(newTech);
  }
  return (
    <>
      <div className="nav_display">
        <h1 className="head"><BsArrowDownShort />Select Your Technology<BsArrowDownShort /></h1>
        <Search onSearch={handleSearch}/>
        {filterTechArray.map((tech)=>(
            <>
              <Link to={tech.to} key={tech.to}>
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
