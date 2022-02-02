import React from "react";

const FilmInfo = ({ films }) => {
  const { nameRu, posterUrlPreview, rating, year } = films;
  return (
    <div className="filminfo">
      <img className="filminfo__img" src={posterUrlPreview} alt="img" />
      <div className="filminfo__filmname">
       { `${nameRu} (${year})`}
        <span className="filminfo__rating">{rating}</span>
      </div>
    </div>
  );
};

export default FilmInfo;
