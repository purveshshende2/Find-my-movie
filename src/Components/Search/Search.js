import React, { useState } from "react";


const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = e => {
      setSearchValue(e.target.value);
    };

    const resetInputField = () => {
      setSearchValue("");
    };

  const callSearchFunction = e => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  };

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        placeholder =' 🔎 Eg: Avengers Endgame'
        className = 'br3 bg-white pa3 ba b--white w-30 shadow-5'
      />

      <input onClick={callSearchFunction} type="submit" value="SEARCH" className ='br3 w-5 shadow-5' />
    </form>
  );
};

export default Search;