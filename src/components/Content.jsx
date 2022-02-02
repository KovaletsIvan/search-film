import React from "react";
import { connect } from "react-redux";
import { recivedFilms } from "../films.actions";
import { selectedFilms } from "../films.selectors";
import FilmInfo from "./FilmInfo";

class Content extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }
  
  render() {
    console.log(this.props.filmsToRender)
    return (
      <div className="content">
        { this.props.filmsToRender.map(elem=> <FilmInfo key={elem.filmId} films={elem}/>) }
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    filmsToRender: selectedFilms(state),
  };
};

const mapDispatch = {
  fetchData: recivedFilms,
};

export default connect(mapState, mapDispatch)(Content);
