import "./sass_pages/MovieGrid.scss"

import { useSearchParams } from "react-router-dom"
import { useEffect,useState } from "react"
import { useSelector,useDispatch } from "react-redux"

const searchUrl = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

const Search = () => {
  const dispatch = useDispatch()
  const {movies,error,loading,message} = useSelector(state => state.movies)

  return (
    <div>
        <h1>search</h1>
    </div>
  )
}

export default Search