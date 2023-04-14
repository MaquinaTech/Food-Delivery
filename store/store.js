// store.js

import { configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import reducer from './reducer';

const makeStore = () => {
  return configureStore({
    reducer,
  });
};

export const wrapper = createWrapper(makeStore, { debug: true });