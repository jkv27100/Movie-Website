import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice';
import favoriteReducer from './favoriteSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    favorite: favoriteReducer,
  },
});
