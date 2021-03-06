import React from "react";
import { connect } from "react-redux";
import { selectedFilms } from "../films.selectors";
import FilmInfo from "./FilmInfo";
import SearchField from "./SearchField";

const SerchedPage = (props) => {
  if (props.selectedFilms.length === 0) {
    return (
      <div className="films">
        <SearchField />
        <h1 className="notfound">Film not found</h1>
      </div>
    );
  }
  if (!props.showFilm) {
    return (
      <div className="films">
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
  }
  return (
    <PageInfo
      filmId={props.filmId}
      films={props.selectedFilms}
      showInfoWindow={props.showInfoWindow}
    />
  );
};

const mapState = (state) => {
  return {
    selectedFilms: selectedFilms(state),
  };
};

export default connect(mapState)(SerchedPage);
