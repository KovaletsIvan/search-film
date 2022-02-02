import { createSelector } from "reselect";

export const search = (state) => {
  return state.searchedFilm;
};

export const selectedFilms = (state) => {
  return state.films;
};

export const getSearchedFilm = createSelector(
  [selectedFilms, search],
  (films, searched) => {
    const result = films.filter((film) => film.nameRu === searched);
    return result;
  }
);
