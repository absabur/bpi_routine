import React, { useEffect, useState } from 'react'
import '../index.css'

const Search = (props) => {
    const [searchText , setSearchText] = useState("");

    const handleChange = (e) =>{
        setSearchText(e.target.value);
    }
    useEffect(()=>{
        props.onSearch(searchText)
    },[searchText])

  return (
    <div>
        <input className='search' type='text' placeholder='Search Technology' value={searchText} onChange={handleChange}/>
    </div>
  )
}

export default Search;