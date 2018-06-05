/**
 * Created by joewolfgram on 3/9/17.
 */
 import MoviesPage from './MoviesPage';
 import MovieDescriptionPage from './MovieDescriptionPage';

const pages = {
  "Movies": {
      href: "/movies",
      navbarItem: true,
      component: MoviesPage
  },
  "Movie Description": {
      href: "/description/:movieId",
      navbarItem: false,
      component: MovieDescriptionPage
  },
};

export default pages;
