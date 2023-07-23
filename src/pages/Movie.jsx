import "./sass_pages/Movie.scss"

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import {getMovies} from "../slices/moviesSlice";

import MovieCard from '../components/MovieCard'

import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";


const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const {id} = useParams()
  const {movies,error,loading} = useSelector(state => state.movies)
  const [movieState,setMovieState] = useState({})
  const dispatch = useDispatch()
  const movieUrl = `${moviesUrl}${id}?${apiKey}`

  useEffect(()=> {
    dispatch(getMovies(movieUrl))
  },[])

  useEffect(()=> {
    setMovieState(movies)
  },[movies])

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US",{
      style: "currency",
      currency: "USD",
    })
  }

  return <div className="movie-page">
    {movieState && <>
      <MovieCard className="movie-card" movie={movieState} showLink={false}/>
      <p className="tag-line">{movieState.tagline}</p>
      <div className="info">
        <h3>
          <BsWallet2/> Orçamento:
        </h3>
        <p>
          {movieState.budget && formatCurrency(movieState.budget)}
        </p>
      </div>
      <div className="info">
        <h3>
          <BsGraphUp/> Faturamento:
        </h3>
        <p>
          {movieState.revenue && formatCurrency(movieState.revenue)}
        </p>
      </div>
      <div className="info">
        <h3>
          <BsHourglassSplit/> Duração: 
        </h3>
        <p>
          {movieState.runtime} minutos
        </p>
      </div>
      <div className="info description">
        <h3>
          <BsFillFileEarmarkTextFill/> Descrição: 
        </h3>
        <p>
          {movieState.overview}
        </p>
      </div>
    </>}
  </div>;
};

export default Movie;
