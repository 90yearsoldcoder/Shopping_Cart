import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import style from "../styles/searchBar.module.css";
import { useState } from "react";

const SearchBar = () => {
  const [showInput, setShowInput] = useState(false);

  function iconHandler() {
    setShowInput(!showInput);
  }

  function handleSearch(event) {
    if (event.key === "Enter") {
      console.log(event.target.value);
    }
  }

  return (
    <div className={style.container}>
      <FontAwesomeIcon
        className={style.searchIcon}
        icon={faMagnifyingGlass}
        size="xl"
        onClick={iconHandler}
      />
      {showInput ? (
        <input
          className={style.input}
          type="text"
          placeholder="searching"
          onKeyDown={handleSearch}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchBar;
