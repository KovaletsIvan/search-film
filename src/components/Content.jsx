import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { recivedFilms, recivedPages } from "../films.actions";
import { selectedFilms } from "../films.selectors";
import FilmInfo from "./FilmInfo";
import PageInfo from "./PageInfo";
import SearchField from "./SearchField";
import MyPagination from "./MyPagination";
import MinPagination from "./MinPagination";
import SerchedPage from "./SerchedPage";

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

  render() {
    if (!this.state.filmInfoShow) {
      return (
        <div className="content">
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <SearchField />
                <div className="films">
                  {this.props.selectedFilms.map((elem) => (
                    <FilmInfo
                      key={elem.id}
                      films={elem}
                      showInfoWindow={this.showInfoWindow}
                    />
                  ))}
                </div>
                <MyPagination />
                <MinPagination />
              </Route>
              <Route path="/search">
                <SerchedPage
                  showFilm={this.state.filmInfoShow}
                  filmId={this.state.filmId}
                  films={this.props.selectedFilms}
                  showInfoWindow={this.showInfoWindow}
                />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      );
    }
    return (
      <PageInfo
        filmId={this.state.filmId}
        films={this.props.selectedFilms}
        showInfoWindow={this.showInfoWindow}
      />
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
