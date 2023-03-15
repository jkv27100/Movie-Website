import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movieDetails: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    storeFavMovie: (state, action) => {
      const isExisting = state.movieDetails.find(movie => movie.id === action.payload.id);
      if (isExisting) return;
      const newState = [...state.movieDetails, action.payload];
      state.movieDetails = newState;
    },

    removeFavMovie: (state, action) => {
      const newState = state.movieDetails.filter(movie => movie.id !== action.payload.id);
      state.movieDetails = newState;
    },
  },
});

export const { storeFavMovie, removeFavMovie } = favoriteSlice.actions;

export default favoriteSlice.reducer;
