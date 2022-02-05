import React from "react";
import { connect } from "react-redux";
import { recivedFilms, recivedPages } from "../films.actions";
import { selectedFilms } from "../films.selectors";
import FilmInfo from "./FilmInfo";


class Content extends React.Component {
  componentDidMount() {
    this.props.fetchData();
    this.props.pages();
  }

  render() {
    console.log(this.props)
    return (
      <div className="content">
        {this.props.selectedFilms.map((elem) => (
          <FilmInfo key={elem.id} films={elem} />
        ))}
      </div>
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
