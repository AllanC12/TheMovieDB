import "./sass_pages/MovieGrid.scss";

import MovieCard from "../components/MovieCard";

import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getMovies } from "../slices/moviesSlice";
const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [moviesState,setMoviesState] = useState([])
  const { movies, error, loading, message } = useSelector(
    (state) => state.movies
    );
  const searchQuery = `${searchUrl}?${apiKey}&query=${query}`

  useEffect(()=> {
    dispatch(getMovies(searchQuery))
  },[searchQuery])

  useEffect(()=> {
    setMoviesState(movies)
  },[movies])

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao carregar a página :(</p>;
  }

  console.log(moviesState)

  return (
    <div className="container">
      <h2 className="title">
        Resultados encontrados para: <span className="query-title">{query}</span>
      </h2>
      <div className="movies-container">
        {moviesState.results &&
          moviesState.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} showLink={true} />
          ))}
      </div>
    </div>
  );
};

export default Search;
