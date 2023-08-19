// Search.js
import React, { useState } from "react";

const Search = ({ onChange }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    onChange(searchQuery);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a location"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
