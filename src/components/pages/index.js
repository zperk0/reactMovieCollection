/**
 * Created by joewolfgram on 3/9/17.
 */
 import MoviesPage from './MoviesPage';
 import MovieDescriptionPage from './MovieDescriptionPage';

const pages = {
  "Movie Description": {
      href: "/description/:movieId",
      navbarItem: false,
      component: MovieDescriptionPage
  },
  "Movies": {
      href: "/",
      navbarItem: true,
      component: MoviesPage
  }
};

export default pages;
