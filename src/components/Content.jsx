import React from "react";
import { connect } from "react-redux";
import { recivedFilms, recivedPages } from "../films.actions";
import { selectedFilms } from "../films.selectors";
import FilmInfo from "./FilmInfo";
import PageInfo from "./PageInfo";
import SearchField from "./SearchField";
import MyPagination from "./Pagination";

class Content extends React.Component {
  state = {
    filmInfoShow: false,
    filmId: null,
  };

  componentDidMount() {
    this.props.fetchData();
    this.props.pages();
  }

  showInfoWindow = (e) => {
    this.setState({
      filmInfoShow: !this.state.filmInfoShow,
      filmId: e.target.id,
    });
  };

  getFilm = () => {
    console.log(
      this.props.selectedFilms.filter((film) => film.id === this.state.filmId)
    );
  };

  render() {
    console.log(this.state);
    if (!this.state.filmInfoShow) {
      return (
        <div className="content">
          <SearchField />
          {this.props.selectedFilms.map((elem) => (
            <FilmInfo
              key={elem.id}
              films={elem}
              showInfoWindow={this.showInfoWindow}
            />
          ))}
          <MyPagination />
        </div>
      );
    }
    return (
      <PageInfo filmId={this.state.filmId} films={this.props.selectedFilms} />
    );
  }
}
const mapState = (state) => {
  return {
    selectedFilms: selectedFilms(state),
  };
};

const mapDispatch = {
  fetchData: recivedFilms,
  pages: recivedPages,
};

export default connect(mapState, mapDispatch)(Content);
