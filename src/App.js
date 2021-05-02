import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getMovies,
  setCategories,
} from './store/actions';

import Card from './components/Card';
import Filter from './components/Filter';

import style from './style.module.scss';

const App = () => {
  const dispatch = useDispatch();
  const { moviesList, categories } = useSelector((store) => store.movies);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  useEffect(() => {
    makeCategories(moviesList);
  }, [moviesList]);

  useEffect(() => {
    const checkedCategories = categories.filter((cat) => cat.checked).map((cat) => cat.title);
    setFilter(checkedCategories);
  }, [categories]);

  // useEffect(() => {
  //   // filter.forEach((cat) => {
  //   //   const filtered = moviesList.filter((movie) => movie.category === cat)
  //   //   console.log('filtered', filtered);
  //   //   return [...filtered];
  //   // })
  //   var filtered = moviesList.filter((element) => {
  //     // var cats = element.category.split(' ');
  //     // console.log('cats', cats);
  //     return filter.filter((cat) => filter.indexOf(cat) > -1).length === filter.length;
  //  });
  //  console.log('filtered', filtered);
  // }, [filter]);

  console.log(moviesList);

  const makeCategories = (movies) => {
    const categories = movies.map((movie) => ({
      id: movie.id,
      title: movie.category,
      checked: false,
    }));
    const titles = categories.map((cat) => cat.title);
    const filteredCategories = categories.filter(({title}, index) => !titles.includes(title, index + 1));
    dispatch(setCategories(filteredCategories));
  }

  return (
    <div className={style.Wrapper}>
      <div className={style.Content}>
        <Filter categories={categories} />
        <div className={style.Movies}>
          {moviesList.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
