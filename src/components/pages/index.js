import MoviesPage from "./MoviesPage";
import MoviesByYearPage from "./MoviesByYearPage";
import MovieDescriptionPage from "./MovieDescriptionPage";

const pages = {
  "Movie Description": {
    href: "/description/:movieId",
    navbarItem: false,
    component: MovieDescriptionPage
  },
  Movies: {
    href: "/",
    navbarItem: true,
    component: MoviesPage
  },
  "Movies By Year": {
    href: "/byYear",
    navbarItem: true,
    component: MoviesByYearPage
  }
};

export default pages;
