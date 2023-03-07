/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import launchesReducer from './features/launchesSlice';

const store = configureStore({
  reducer: {
    launches: launchesReducer,
  },
});

export default store;
