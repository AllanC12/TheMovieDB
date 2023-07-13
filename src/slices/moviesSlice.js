import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
 import moviesService from "../services/moviesService";

const initialState = {
  movies: [],
  loading: false,
  error: false,
  message: null,
  success: false,
};

export const getMovies = createAsyncThunk("movies/getMovies", async (url) => {
  const data = moviesService.getMovies(url);
  return data;
});

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getMovies.fulfilled, (state,action) => {
        state.message = "Filmes atualizados";
        state.movies = action.payload
        state.error = false;
        state.loading = false;
      });
  },
});

export default moviesSlice.reducer;
