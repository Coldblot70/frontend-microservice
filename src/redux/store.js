import { configureStore } from '@reduxjs/toolkit';
import { notesReducer } from './reducers/notesreducer';

const store = configureStore({
  reducer: {
    notes: notesReducer
  }
});

export default store;