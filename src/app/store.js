import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../feature/booksList/bookSlice';

const LOCAL_STORAGE_KEY = 'redux_book_app_state_v1';

const isLocalStorageAvailable = () => {
  try {
    return (
      typeof window !== 'undefined' &&
      typeof window.localStorage !== 'undefined'
    );
  } catch {
    return false;
  }
};

function loadState() {
  if (!isLocalStorageAvailable()) return undefined;
  try {
    const serialized = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!serialized) return undefined;
    return JSON.parse(serialized);
  } catch (err) {
    console.warn('Failed to load state from localStorage:', err);
    return undefined;
  }
}

function saveState(state) {
  if (!isLocalStorageAvailable()) return;
  try {
    const serialized = JSON.stringify(state);
    window.localStorage.setItem(LOCAL_STORAGE_KEY, serialized);
  } catch (err) {
    console.warn('Failed to save state to localStorage:', err);
  }
}

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    bookR: bookReducer,
  },
  preloadedState,
});

// Debounced save to avoid writing on every action
let saveTimeout = null;
store.subscribe(() => {
  if (!isLocalStorageAvailable()) return;
  if (saveTimeout) clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    try {
      saveState(store.getState());
    } catch (err) {
      console.warn('Error saving state:', err);
    }
  }, 700);
});

export default store;
