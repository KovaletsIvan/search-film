import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getFilm, recivedPages } from "../films.actions";

const SearchField = (props) => {
  const [value, setValue] = useState("");
  return (
    <div className="serchfield">
      <div className="serchfield__label">
        <input
          className="serchfield__label-input"
          type="text"
          placeholder="type a film name to start a search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="serchfield__label-btn"
          onClick={() => props.getFilm(value)}
        >
          <Link className="link" to="/search">
            Search
          </Link>
        </button>
      </div>
    </div>
  );
};

const mapDispatch = {
  getFilm: getFilm,
  recivedPages: recivedPages,
};

export default connect(null, mapDispatch)(SearchField);
