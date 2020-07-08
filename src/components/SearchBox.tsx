import React from "react";

interface ISearchBoxProps {
  onSearchInputChange: (event: React.SyntheticEvent) => void
}

const SearchBox = ({ onSearchInputChange }: ISearchBoxProps) => {
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
