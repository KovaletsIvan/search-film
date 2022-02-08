import React from "react";

const PageInfo = ({ filmId, films, showInfoWindow }) => {
  const film = films.filter((elem) => elem.id == filmId);
  const [filmObj] = film;
  const {
    backdrop_path,
    title,
    overview,
    release_date,
    vote_average,
    vote_count,
    original_language,
  } = filmObj;

  return (
    <div
      className="pageinfo"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${backdrop_path}")`,
        backgroundSize: "cover",
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
          <div className="datafilm">
            <div className="datafilm__data">
              <div className="datafilm__data-block">
                <div className="datafilm__data-block-title">Date Release</div>
                <div className="datafilm__data-block-info">{release_date}</div>
              </div>
              <div className="datafilm__data-block">
                <div className="datafilm__data-block-title">Vote Everage</div>
                <div className="datafilm__data-block-info">{vote_average}</div>
              </div>
            </div>
            <div className="datafilm__data">
              <div className="datafilm__data-block">
                <div className="datafilm__data-block-title">Vote Count</div>
                <div className="datafilm__data-block-info">{vote_count}</div>
              </div>
              <div className="datafilm__data-block">
                <div className="datafilm__data-block-title">Lenguage</div>
                <div className="datafilm__data-block-info">
                  {original_language}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageInfo;
