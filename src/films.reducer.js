import { FILMS_DATA, FILMS_SEARCH, FILMS_PAGESCOUNT } from "./films.actions";

const initialState = {
  pagesCount: 0,
  films: [],
  searchedFilm: "",
};

export const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILMS_DATA:
      return {
        ...state,
        films: action.payload.films,
      };
    case FILMS_SEARCH:
      return {
        ...state,
        searchedFilm: action.payload.film,
      };
    case FILMS_PAGESCOUNT:
      return {
        ...state,
        pagesCount: action.payload.pagesCount,
      };
    default:
      return state;
  }
};
