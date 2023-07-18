const getMovies = async (url) => {
  try {
    const data = await fetch(url).then(data => data.json())
    return data
  } catch (error) {
    console.log(error)
  }

}

const moviesService = {
    getMovies
}

export default moviesService