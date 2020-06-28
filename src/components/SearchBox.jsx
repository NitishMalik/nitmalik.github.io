import React from "react";

const SearchBox = ({ onSearchInputChange }) => {
  console.log("Render SearchBox");
  return (
    <div className="pa2">
      <input
        aria-label="Search Robots"
        type="search"
        className="pa3 ba b--green bg-lightest-blue"
        placeholder="Search Robos"
        onChange={onSearchInputChange}
      />
    </div>
  );
};

export default SearchBox;
