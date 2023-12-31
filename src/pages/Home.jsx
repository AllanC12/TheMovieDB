import "./sass_pages/MovieGrid.scss";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../slices/moviesSlice";

import MovieCard from "../components/MovieCard";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const dispatch = useDispatch();
  const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`;
  const { movies, loading, error } = useSelector((state) => state.movies);

  const [moviesState, setMoviesState] = useState([]);

  useEffect(() => {
    dispatch(getMovies(topRatedUrl));
  }, []);

  useEffect(() => {
    setMoviesState(movies);
  }, [movies]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if(error){
    return <p>Erro ao carregar página</p>
  }

  return (
    <div className="container">
      <h2 className="title">Os mais bem avaliados</h2>
      <div className="movies-container">
        {moviesState.results &&
          moviesState.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} showLink={true} />
          ))}
      </div>
    </div>
  );
};

export default Home;
