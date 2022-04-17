import Home from './pages/home';
import Movie from './pages/movie';
import MovieList from './pages/movieList';

const routes = [
  {
    name: 'home',
    path: '/',
    element: Home,
  },

  {
    name: 'movie list',
    path: '/movies',
    element: MovieList,
  },
  {
    name: 'detail movie',
    path: '/movies/:id',
    element: Movie,
    isHidden: true,
  },
];

export default routes;