import React from "react";

const PageInfo = ({ filmId, films, showInfoWindow }) => {
  const film = films.filter((elem) => elem.id == filmId);
  const [filmObj] = film;
  const { backdrop_path, title, overview } = filmObj;

  return (
    <div
      className="pageinfo"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${backdrop_path}")`,
        backgroundSize: "auto",
      }}
    >
      <div className="pageinfo__filmdata" onClick={showInfoWindow}>
        <div className="pageinfo__filmdata-blockimage">
          <img
            className="pageinfo__filmdata-blockimage_img"
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt="img"
          />
        </div>
        <div className="pageinfo__description">
          <div className="pageinfo__description-title">{title}</div>
          <div className="pageinfo__description-overview">{overview}</div>
        </div>
      </div>
    </div>
  );
};
export default PageInfo;
