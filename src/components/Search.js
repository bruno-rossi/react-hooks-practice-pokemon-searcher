import React from "react";

function Search({ setSearch, search }) {

  function handleSearch(event) {
    setSearch(event.target.value);
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={search} onChange={event => handleSearch(event)}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
