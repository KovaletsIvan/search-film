import React from "react";

const SearchField = () => {
  return (
    <div className="serchfield">
      <label className="serchfield__label">
        <input className="serchfield__label-input" type="text" 
        placeholder='type a film name to start a search'
        />
        <button className="serchfield__label-btn">Search</button>
      </label>
    </div>
  );
};

export default SearchField;
