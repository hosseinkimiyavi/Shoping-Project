import React from 'react'
import { ImSearch } from "react-icons/im";
import { createQueryObject } from '../Helpers/helper';

function SearchBox({search ,setquery ,setsearch}) {
    const SearchHandler = () => {
        setquery((query) => createQueryObject(query,{search}) );
      };
  return (
    <div>
    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e) => setsearch(e.target.value.toLocaleLowerCase().trim())}
    />
    <button onClick={SearchHandler}>
      <ImSearch />
    </button>
  </div>
  )
}

export default SearchBox