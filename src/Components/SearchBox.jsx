import React from 'react'
import { ImSearch } from "react-icons/im";
import { createQueryObject } from '../Helpers/helper';
import styles from "./search.module.css"

function SearchBox({search ,setquery ,setsearch}) {
    const SearchHandler = () => {
        setquery((query) => createQueryObject(query,{search}) );
      };
  return (
    <div className={styles.search}>
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