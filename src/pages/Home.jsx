import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../slices/moviesSlice";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const dispatch = useDispatch();
  const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`
  const {movies, loading, error} = useSelector(state => state.movies)

  useEffect(()=> {
    dispatch(getMovies(topRatedUrl))
  },[])

  return <div>Home</div>;
};

export default Home;
