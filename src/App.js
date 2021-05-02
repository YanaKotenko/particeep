import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getMovies,
  getCategories,
  filterMovies,
} from './store/actions';

import Card from './components/Card';
import Filter from './components/Filter';
import Pagination from './components/Pagination';

import style from './style.module.scss';

const App = () => {
  const dispatch = useDispatch();
  const { moviesList, categories, filteredMovies } = useSelector((store) => store.movies);
  const cardList = filteredMovies.length === 0 ? moviesList : filteredMovies;

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  useEffect(() => {
    console.log(moviesList);
    dispatch(getCategories(moviesList));
  }, [moviesList]);

  useEffect(() => {
    const checkedCategories = categories.filter((cat) => cat.checked).map((cat) => cat.title);
    dispatch(filterMovies(checkedCategories));
  }, [categories]);

  const onClickPaginator = (action) => {
    console.log(action);
  };

  return (
    <div className={style.Wrapper}>
      <div className={style.Content}>
        <Filter categories={categories} />
        <div className={style.Movies}>
          {cardList.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
        <Pagination onClick={(action) => onClickPaginator(action)} />
      </div>
    </div>
  );
}

export default App;
