import React, { useState, useEffect } from "react";
import { filmsByPage } from "../films.actions";
import { connect } from "react-redux";
import { selectedPagesCount } from "../films.selectors";

const Pagination = ({ pagesCount, filmsByPage }) => {
  const [pages, setPages] = useState(1);
  useEffect(() => {
    filmsByPage(pages);
  }, [pages]);

  const buttonPriv = pages === 1 ? true : false;
  const buttonNext = pages === pagesCount ? true : false;

  return (
    <div className="minpagination">
      <button
        className="minpagination__btn"
        disabled={buttonPriv}
        onClick={() => setPages(pages - 1)}
      >
        <i className="fas fa-backward"></i>
      </button>
      <span className="minpagination__curentpage">{pages}</span>
      <button
        className="minpagination__btn"
        disabled={buttonNext}
        onClick={() => setPages(pages + 1)}
      >
        <i className="fas fa-forward"></i>
      </button>
    </div>
  );
};

const mapState = (state) => {
  return {
    pagesCount: selectedPagesCount(state),
  };
};

const mapDispatch = {
  filmsByPage: filmsByPage,
};

export default connect(mapState, mapDispatch)(Pagination);