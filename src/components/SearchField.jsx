import React, { useState } from "react";
import { connect } from "react-redux";
import { getFilm } from "../films.actions";

const SearchField = (props) => {
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
        <button
          className="serchfield__label-btn"
          onClick={()=>props.getFilm(value)}
        >
          Search
        </button>
      </label>
    </div>
  );
};

const mapDispatch = {
  getFilm: getFilm,
};

export default connect(null, mapDispatch)(SearchField);
