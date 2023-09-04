import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSlice",
  initialState: {
    showGptSearch: false,
    gptMovieResult: null,
    searchResults: "",
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGPTmovieResult: (state, action) => {
      state.gptMovieResult = action.payload;
    },
    addGptSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export default gptSlice.reducer;

export const { toggleGptSearch, addGPTmovieResult, addGptSearchResults } =
  gptSlice.actions;
