import { getData } from "./films.gatawey";

export const FILMS_DATA = "FILMS/DATA";

export const getFilmsData = (films) => {
  return {
    type: FILMS_DATA,
    payload: {
      films,
    },
  };
};

export const recivedFilms = (date) => {
  const thunkAction = function (dispatch) {
    getData(date).then((resp) => dispatch(getFilmsData(resp.films)));
  };
  return thunkAction;
};
