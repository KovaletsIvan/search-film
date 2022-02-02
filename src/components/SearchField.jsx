import React, { useState } from "react";

const SearchField = () => {
  const [value, setValue] = useState("");
  return (
    <div className="serchfield">
      <label className="serchfield__label">
        <input
          className="serchfield__label-input"
          type="text"
          placeholder="type a film name to start a search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="serchfield__label-btn">Search</button>
      </label>
    </div>
  );
};

export default SearchField;
