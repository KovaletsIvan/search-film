import {
  getData,
  getDescription,
  getSearchedFilm,
  getFilmId,
} from "./films.gatawey";

export const FILMS_DATA = "FILMS/DATA";
export const FILMS_SEARCH = "FILMS/SEARCH,";
export const FILMS_DESCRIPTION = "FILMS/DESCRIPTION";

export const getFilmsData = (films) => {
  return {
    type: FILMS_DATA,
    payload: {
      films,
    },
  };
};

export const serchFilm = (film) => {
  return {
    type: FILMS_SEARCH,
    payload: {
      film,
    },
  };
};

export const filmDescription = (description) => {
  return {
    type: FILMS_DESCRIPTION,
    payload: {
      description,
    },
  };
};

export const recivedFilms = (date) => {
  const thunkAction = function (dispatch) {
    getData(date).then((resp) => dispatch(getFilmsData(resp.films)));
  };
  return thunkAction;
};

export const getFilm = (str) => {
  const thunkAction = function (dispatch) {
    getSearchedFilm(str).then((resp) => dispatch(getFilmsData(resp.films)));
  };
  return thunkAction;
};

export const getFilmDescription = (getFilmId) => {
  const thunkAction = function (dispatch) {
    getDescription(getFilmId).then((resp) =>
      dispatch(filmDescription(resp.description))
    );
  };
  return thunkAction;
};
