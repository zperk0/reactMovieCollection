/**
 * Created by joewolfgram on 3/16/17.
 */
export var API = {
    baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=c71c5ea3fc135459eee67daa732e0bee'
};
export let getMovies = () => {
    return new Promise((resolve, reject) => {
        fetch(API.baseURL).then((users) => {
            resolve(users.json());
        }).catch((err) => {
            reject(err);
        })
    });
};
