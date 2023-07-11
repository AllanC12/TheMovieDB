

const getMovies = async (url) => {
  const data = await fetch(url).then(data => data.json())
  return data
}

const moviesService = {
    getMovies
}

export default moviesService