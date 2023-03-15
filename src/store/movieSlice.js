import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movieDetails: [],
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    storeMovieSearchDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
  },
});

export const { storeMovieSearchDetails } = movieSlice.actions;

export default movieSlice.reducer;
