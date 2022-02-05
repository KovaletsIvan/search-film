export const search = (state) => {
  return state.searchedFilm;
};

export const selectedFilms = (state) => {
  return state.results;
};

export const selectedPagesCount = (state) => {
  return state.total_pages;
};
