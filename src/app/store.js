import { configureStore } from '@reduxjs/toolkit';
import movieReducer from 'features/Movies/Movies';
export const store = configureStore({
  reducer: {
    movieReducer,
  },
});
