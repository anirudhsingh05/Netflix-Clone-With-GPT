import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    movieName: null,
    movieResult: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieName, movieResult } = action.payload;
      state.movieName = movieName;
      state.movieResult = movieResult;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult } = GPTSlice.actions;

export default GPTSlice.reducer;
