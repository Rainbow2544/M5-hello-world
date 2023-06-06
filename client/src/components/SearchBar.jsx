import React from "react";
import "./SearchBar.css";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <form id="searchBarContainer">
      <input
        id="searchBarContainer--input"
        type="text"
        placeholder="Search your favorite places, hotels here"
      />
      <button className="searchBarContainer--button">
        <AiOutlineSearch id="searchBarContainer--button--searchLogo" />
      </button>
    </form>
  );
};

export default SearchBar;
