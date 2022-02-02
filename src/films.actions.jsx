import { getData } from "./films.gatawey";

export const FILMS_DATA = "FILMS/DATA";
export const FILMS_SEARCH = "FILMS/SEARCH,";

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

export const recivedFilms = (date) => {
  const thunkAction = function (dispatch) {
    getData(date).then((resp) => dispatch(getFilmsData(resp.films)));
  };
  return thunkAction;
};
