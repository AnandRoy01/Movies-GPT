import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRated: null,
    upcoming: null,
    trailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upcoming = action.payload;
    },
    addtrailerVideo: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export default moviesSlice.reducer;

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRated,
  addUpcoming,
  addtrailerVideo,
} = moviesSlice.actions;
