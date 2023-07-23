import "./sass_components/MovieCard.scss";

import { FaStar } from "react-icons/fa";

import { Link } from "react-router-dom";

const urlImage = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink }) => {

  const splitNumber = (number) => {
    return number.toFixed(1)
  }

  return (
    <div className="movie-card">
      {!movie.backdrop_path ? (
        <h2 className="validate-image">Imagem não disponível</h2>
      ) : (
        <img src={`${urlImage}${movie.poster_path}`} alt={movie.title} />
      )}

      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average && splitNumber(movie.vote_average)}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

export default MovieCard;
