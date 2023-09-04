import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addtrailerVideo: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export default moviesSlice.reducer;

export const { addNowPlayingMovies, addtrailerVideo } = moviesSlice.actions;
