import React, { useState, useEffect } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { filmsByPage } from "../films.actions";
import { connect } from "react-redux";
import { selectedPagesCount } from "../films.selectors";

const MyPagination = ({ pagesCount, filmsByPage  }) => {
  const [pages, setPage] = useState(1);

  useEffect(() => {
    filmsByPage(pages);
  }, [pages]);

  return (
    <div className="mypagination">
      <Pagination
        count={pagesCount}
        size="large"
        variant="text"
        variant="outlined"
        onChange={(e, value) => setPage(value)}
      />
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
