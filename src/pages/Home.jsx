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

  const [moviesState,setMoviesState] = useState([])

  useEffect(() => {
    dispatch(getMovies(topRatedUrl));
  }, []);

  useEffect(()=> {
    setMoviesState(movies)
  },[movies])

  console.log(moviesState.results)

 
  if (loading) {
    return <p>Carregando...</p>;
  }

  return <div className="container">
    <h2 className="title">Os mais bem avaliados</h2>
     <div className="movies-container">
       {/* {moviesState.results.map(movie => (
          <MovieCard key={movie.id} movie={movie} showLink={true}/>
        ))} */}
     </div>
  </div>
};

export default Home;
