import { getData, getSearchedFilm, getDataByPage } from "./films.gatawey";

export const FILMS_DATA = "FILMS/DATA";
export const FILMS_SEARCH = "FILMS/SEARCH,";
export const FILMS_PAGESCOUNT = "FILMS/PAGESCOUNT";

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

export const filmsPagesCount = (pagesCount) => {
  return {
    type: FILMS_PAGESCOUNT,
    payload: {
      pagesCount,
    },
  };
};

export const recivedFilms = (date) => {
  const thunkAction = function (dispatch) {
    getData(date).then((resp) => dispatch(getFilmsData(resp.films)));
  };
  return thunkAction;
};

export const recivedPages = (date) => {
  const thunkAction = function (dispatch) {
    getData(date).then((resp) => dispatch(filmsPagesCount(resp.pagesCount)));
  };
  return thunkAction;
};

export const getFilm = (str) => {
  const thunkAction = function (dispatch) {
    getSearchedFilm(str).then((resp) => dispatch(getFilmsData(resp.films)));
  };
  return thunkAction;
};

export const filmsByPage = (page) => {
  const thunkAction = function (dispatch) {
    getDataByPage(page).then((resp) => dispatch(getFilmsData(resp.films)));
  };
  return thunkAction;
};
