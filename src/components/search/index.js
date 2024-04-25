import React, { useRef } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
// Import createSearchParams
// Import useNavigate

const Search = () => {
  // get navigate function
  const navigate = useNavigate();

  const searchInputRef = useRef();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const searchQuery = {
      name: searchInputRef.current.value,
    };

    // use createSearchParams
    const query = createSearchParams(searchQuery);

    navigate({
      pathname: "/search",
      search: `?${query}`
    });

    // imperatively redirect with useNavigate() returned function
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;
