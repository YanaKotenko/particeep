// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../store/actions';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
import { combineReducers } from 'redux';
import movieReducer from '../store/reducer';

const reducers = {
  movies: movieReducer,
};

const rootReducer = combineReducers(reducers);
export default rootReducer;
