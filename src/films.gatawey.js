export const getData = () =>
  fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=a41b56e2d83785d93072426a729e2e4e&language=en-US&page=1"
  ).then((res) => res.json());

export const getDataByPage = (page) =>
  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=a41b56e2d83785d93072426a729e2e4e&language=en-US&page=${page}`
  ).then((res) => res.json());

export const getSearchedFilm = (str) => {
  if (str.length === 0) {
    return getData();
  }
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=a41b56e2d83785d93072426a729e2e4e&query=${str}`
  ).then((res) => res.json());
};

export const fetchData = () =>
  fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=a41b56e2d83785d93072426a729e2e4e&language=en-US&page=1"
  ).then((res) => res.json());

fetchData().then((resp) => console.log(resp));
