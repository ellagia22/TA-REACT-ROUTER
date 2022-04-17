import { Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./pages/home";
import Movie from "./pages/movie";
import MovieList from "./pages/movieList";
import NotFound from "./pages/notFound";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="*" element = {<NotFound />} /> {/* Route jika URL path yang dicari tidak ada dan akan menuju component Not Found */}
          <Route path="/movies/:id" element = {<Movie />}/> {/* Route movie dengan id Param yang akan menuju ke halaman pada component pages/Movie */}
          <Route path="/" element = {<Home />}/> {/* Route homepage yang akan menuju ke halaman pada component pages/Home */}
          <Route path="/movies" element = {<MovieList />}/> {/* Route movies yang akan menuju ke halaman pada component pages/MovieList */}
        </Routes>
      </div>
    </>
  );
}