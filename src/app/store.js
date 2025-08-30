import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../feature/booksList/bookSlice';

const store = configureStore({
  reducer: {
    bookR: bookReducer,
  },
});

export default store;
