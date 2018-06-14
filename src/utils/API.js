export var API = {
  baseURL: "https://api.themoviedb.org/3/",
  APIKey: "api_key=fdd078e3ab47940c24288be62f983f1c"
};

export let getMovies = () => {
  return fetch(`${API.baseURL}movie/popular?${API.APIKey}`).then(movies => {
    return movies.json();
  });
};

export let getMovieById = id => {
  return fetch(`${API.baseURL}movie/${id}?${API.APIKey}`).then(movie => {
    return movie.json();
  });
};

export let getMostPopularMoviesByYear = year => {
  return fetch(
    `${API.baseURL}discover/movie?primary_release_year=${year}&sort_by=vote_average.desc&${API.APIKey}`
  ).then(movie => {
    return movie.json();
  });
};
