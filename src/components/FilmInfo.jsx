import React, { useState } from "react";
import { connect } from "react-redux";
import { getDescription } from "../films.gatawey";

const FilmInfo = (props) => {
  const [description, setDescription] = useState("");
  const { filmId, nameRu, posterUrlPreview, rating, year } = props.films;

  return (
    <div
      id={filmId}
      className="filminfo"
      onMouseEnter={() =>
        getDescription(filmId).then((resp) => setDescription(resp.description))
      }
    >
      <img
        id={filmId}
        className="filminfo__img"
        src={posterUrlPreview}
        alt="img"
      />
      <p id={filmId} className="description">
        {description}
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

export default connect(mapState)(FilmInfo);
