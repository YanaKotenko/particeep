import { movies$ } from '../api/config';
import {
  GET_MOVIES,
  DELETE_MOVIE,
  SET_FILTERS_CATEGORIES,
  TOGGLE_CATEGORY_STATE,
  EVOLUATE_MOVIE,
} from './const';

export const getMovies = () => (dispatch) => {
  movies$.then((res) => {
    dispatch({ type: GET_MOVIES, moviesList: res });
  });
};

export const setCategories = (filteredCategories) => (dispatch) => {
  dispatch({ type: SET_FILTERS_CATEGORIES, categories: filteredCategories });
};

export const deleteMovie = (id) => (dispatch) => {
  dispatch({ type: DELETE_MOVIE, id });
};

export const toggleCategoryState = (id) => (dispatch) => {
  dispatch({ type: TOGGLE_CATEGORY_STATE, id });
};

export const evoluateMovie = (id, action) => (dispatch) => {
  dispatch({ type: EVOLUATE_MOVIE, id, action });
};
