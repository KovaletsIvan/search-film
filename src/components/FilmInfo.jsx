import React from "react";
import { connect } from "react-redux";
import { getFilmDescription } from "../films.actions";

const FilmInfo = (props) => {
  const { filmId, nameRu, posterUrlPreview, rating, year } = props.films;

  return (
    <div
      id={filmId}
      className="filminfo"
      onMouseOver={props.getFilmDescription}
    >
      <img
        id={filmId}
        className="filminfo__img"
        src={posterUrlPreview}
        alt="img"
      />
      <p id={filmId} className="description">
        {props.description}
      </p>
      <div id={filmId} className="filminfo__filmname">
        {`${nameRu} (${year})`}
        <span id={filmId} className="filminfo__rating">
          {rating}
        </span>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    description: state.description,
  };
};

const mapDespach = {
  getFilmDescription: getFilmDescription,
};

export default connect(mapState, mapDespach)(FilmInfo);
