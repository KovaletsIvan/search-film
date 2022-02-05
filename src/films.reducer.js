import { FILMS_DATA, FILMS_SEARCH, FILMS_PAGESCOUNT } from "./films.actions";

const initialState = {
  total_pages: 0,
  results: [],
  searchedFilm: "",
};

export const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILMS_DATA:
      return {
        ...state,
        results: action.payload.results,
      };
    case FILMS_SEARCH:
      return {
        ...state,
        searchedFilm: action.payload.results,
      };
    case FILMS_PAGESCOUNT:
      return {
        ...state,
        total_pages: action.payload.total_pages,
      };
    default:
      return state;
  }
};
