import React from "react";

const PageInfo = (props) => {
  const { filmId, films } = props;
  const film = films.filter((elem) => elem.id == filmId);

  return <div className="pageinfo"></div>;
};
export default PageInfo;
