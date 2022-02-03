export const getData = () =>
  fetch(
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1",
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

export const getDescription = (e) =>
  fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${e.target.id}`, {
    method: "GET",
    headers: {
      "X-API-KEY": "dc880426-6653-4412-82d8-db5924942c67",
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());


