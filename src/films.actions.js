import { getData, getSearchedFilm, getDataByPage } from "./films.gatawey";

export const FILMS_DATA = "FILMS/DATA";
export const FILMS_SEARCH = "FILMS/SEARCH,";
export const FILMS_PAGESCOUNT = "FILMS/PAGESCOUNT";

export const getFilmsData = (results) => {
  return {
    type: FILMS_DATA,
    payload: {
      results,
    },
  };
};

export const serchFilm = (data) => {
  return {
    type: FILMS_SEARCH,
    payload: {
      data,
    },
  };
};

export const filmsPagesCount = (total_pages) => {
  return {
    type: FILMS_PAGESCOUNT,
    payload: {
      total_pages,
    },
  };
};

export const recivedFilms = (date) => {
  const thunkAction = function (dispatch) {
    getData(date).then((resp) => dispatch(getFilmsData(resp.results)));
  };
  return thunkAction;
};

export const recivedPages = (date) => {
  const thunkAction = function (dispatch) {
    getData(date).then((resp) => dispatch(filmsPagesCount(resp.total_pages)));
  };
  return thunkAction;
};

export const getFilm = (str) => {
  const thunkAction = function (dispatch) {
    getSearchedFilm(str).then((resp) => dispatch(getFilmsData(resp.results)));
  };
  return thunkAction;
};

export const filmsByPage = (page) => {
  const thunkAction = function (dispatch) {
    getDataByPage(page).then((resp) => dispatch(getFilmsData(resp.results)));
  };
  return thunkAction;
};
