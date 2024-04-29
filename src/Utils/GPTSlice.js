import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
  },
});

export const { toggleGptSearchView } = GPTSlice.actions;

export default GPTSlice.reducer;
