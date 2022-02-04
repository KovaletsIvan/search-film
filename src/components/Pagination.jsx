import React, { useState, useEffect } from "react";
import { filmsByPage } from "../films.actions";
import { connect } from "react-redux";
import { selectedPagesCount } from "../films.selectors";

const Pagination = (props) => {
  const [pages, setPages] = useState(1);
  const buttonPriv = pages === 1 ? true : false;
  const buttonNext = pages === props.pagesCount ? true : false;

  useEffect(()=>{props.filmsByPage(pages)},[pages])

  return (
    <div className="pagination">
      <button
        className="pagination__btn"
        disabled={buttonPriv}
        onClick={() => setPages(pages - 1)}
      >
        <i className="fas fa-backward"></i>
      </button>
      <span className="pagination__curentpage">{pages}</span>
      <button
        className="pagination__btn"
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
    filmsByPage:filmsByPage
};

export default connect(mapState,mapDispatch)(Pagination);
