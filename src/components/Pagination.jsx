import React, { useState, useEffect } from "react";
import {
  Box,
  CssBaseline,
  Typography,
  Card,
  CardContent,
  Grid,
  Container,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { filmsByPage } from "../films.actions";
import { connect } from "react-redux";
import { selectedPagesCount } from "../films.selectors";

const MyPagination = ({pagesCount, filmsByPage}) => {
  const [pages, setPages] = useState(1);
  useEffect(() => {
    filmsByPage(pages);
  }, [pages]);

  const buttonPriv = pages === 1 ? true : false
  const buttonNext = pages === pagesCount ? true : false;

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
  filmsByPage: filmsByPage,
};

export default connect(mapState, mapDispatch)(MyPagination);
