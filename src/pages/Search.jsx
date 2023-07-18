// import "./sass_pages/MovieGrid.scss";

import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const { movies, error, loading, message } = useSelector(
    (state) => state.movies
  );

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao carregar a página :(</p>;
  }

  return (
    <div className="container">
      <h2 className="title">
        <span className="query-title">
          Resultados encontrados para: {query}
        </span>
      </h2>
      <p>Carregando...</p>
    </div>

    // <div className="container">
    //   <h2 className="title">
    //     <span className="query-title">
    //       Resultados encontrados para: {query}
    //     </span>
    //   </h2>
    //   <div className="movies-container">
    //     {moviesState.results &&
    //       moviesState.results.map((movie) => (
    //         <MovieCard key={movie.id} movie={movie} showLink={true} />
    //       ))}
    //   </div>
    // </div>
  );
};

export default Search;
