import React from "react";
import { connect } from "react-redux";
import { selectedFilms } from "../films.selectors";
import FilmInfo from "./FilmInfo";
import SearchField from "./SearchField";

const SerchedPage = (props) => {
  if (props.selectedFilms.length === 0) {
    return (
      <div className="content">
        <SearchField />
        <h1 className="notfound">Film not found</h1>
      </div>
    );
  }
  return (
    <div className="content">
      <SearchField />
      {props.selectedFilms.map((elem) => (
        <FilmInfo
          key={elem.id}
          films={elem}
          showInfoWindow={props.showInfoWindow}
        />
      ))}
    </div>
  );
};

const mapState = (state) => {
  return {
    selectedFilms: selectedFilms(state),
  };
};

export default connect(mapState)(SerchedPage);
