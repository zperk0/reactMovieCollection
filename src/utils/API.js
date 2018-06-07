export var API = {
    baseURL: 'https://api.themoviedb.org/3/movie/',
    APIKey: '?api_key=c71c5ea3fc135459eee67daa732e0bee'
};

export let getMovies = () => {
    return new Promise((resolve, reject) => {
        fetch(API.baseURL + 'popular' + API.APIKey).then((movies) => {
            resolve(movies.json());
        }).catch((err) => {
            reject(err);
        })
    });
};

export let getMovieById = (id) => {
  return new Promise((resolve, reject) => {
      fetch(API.baseURL + id + API.APIKey).then((movie) => {
          resolve(movie.json());
      }).catch((err) => {
          reject(err);
      })
  });
};
