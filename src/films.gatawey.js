export const getData = () =>
  fetch(
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS",
    {
      method: "GET",
      headers: {
        "X-API-KEY": "dc880426-6653-4412-82d8-db5924942c67",
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());

export const getDataByPage = (page) =>
  fetch(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${page}`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "dc880426-6653-4412-82d8-db5924942c67",
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());

export const getSearchedFilm = (str) => {
  if (str.length === 0) {
    return getData();
  }
  return fetch(
    `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${str}`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "dc880426-6653-4412-82d8-db5924942c67",
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
};

export const getDescription = (id) =>
  fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
    method: "GET",
    headers: {
      "X-API-KEY": "dc880426-6653-4412-82d8-db5924942c67",
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

getData().then((resp) => console.log(resp));
