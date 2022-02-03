import { FILMS_DATA, FILMS_SEARCH, FILMS_DESCRIPTION } from "./films.actions";

const initialState = {
  films: [],
  searchedFilm: "",
  description: "",
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
    case FILMS_DESCRIPTION:
      return {
        ...state,
        description: action.payload.description,
      };
    default:
      return state;
  }
};
