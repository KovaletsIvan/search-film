import React from "react";

const FilmInfo = (props) => {
  const {
    id,
    original_title,
    backdrop_path,
    vote_average,
    release_date,
    overview,
  } = props.films;

  return (
    <div id={id} className="filminfo" onClick={props.showInfoWindow}>
      <img
        id={id}
        className="filminfo__img"
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt="film-poster"
      />
      <p id={id} className="description">
        {overview}
      </p>
      <div id={id} className="filminfo__filmname">
        {`${original_title} (${new Date(release_date).getFullYear()})`}
        <span id={id} className="filminfo__rating">
          {vote_average}
        </span>
      </div>
    </div>
  );
};

export default FilmInfo;
