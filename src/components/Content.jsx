import React from "react";
import { connect } from "react-redux";
import { recivedFilms } from "../films.actions";
import { getSearchedFilm, selectedFilms } from "../films.selectors";
import FilmInfo from "./FilmInfo";

class Content extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    const dataToRender =
      this.props.filmsToRender.length === 0
        ? this.props.selectedFilms
        : this.props.filmsToRender;
    return (
      <div className="content">
        {dataToRender.map((elem) => (
          <FilmInfo key={elem.filmId} films={elem} />
        ))}
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    filmsToRender: getSearchedFilm(state),
    selectedFilms: selectedFilms(state),
  };
};

const mapDispatch = {
  fetchData: recivedFilms,
};

export default connect(mapState, mapDispatch)(Content);
