import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useSelector } from './app/store';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import {
  getMovies,
  evoluateMovie,
  deleteMovie,
  toggleCategoryState,
} from './store/actions';
import style from './style.module.scss';

const App = () => {
  const dispatch = useDispatch();
  const { moviesList, categories } = useSelector((store) => store.movies);

  console.log(moviesList);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  // const setLike = (id) => {
  //   dispatch(likeMovie(id));
  // }

  // const setDislike = (id) => {
  //   dispatch(dislikeMovie(id));
  // }

  const onEvoluateMovie = (id, action) => {
    dispatch(evoluateMovie(id, action));
  }

  const onDeleteMovie = (id) => {
    dispatch(deleteMovie(id));
  }

  const onToggleChecked = (id) => {
    dispatch(toggleCategoryState(id));
  }

  return (
    <div className={style.Wrapper}>
      <div className={style.Content}>
        {categories.map((category) => (
          <div key={category.id} className={style.Category} onClick={() => onToggleChecked(category.id)}>
            {/* <div className={style.Checkbox} checked={category.checked} /> */}
            {/* <div className={classNames(style.Checkbox, 'hello')} checked={category.checked} /> */}
            {/* <label>{category.title}</label> */}
            {/* <input type="checkbox" className={style.Checkbox} checked={category.checked} /> */}
            <label>{category.title}</label>
          </div>
        ))}
        <div className={style.Movies}>
          {moviesList.map((movie) => (
            <div key={movie.id} className={style.Movie}>
              <div className={style.MovieImageBox}>
                <div className={style.MovieCategory}>{movie.category}</div>
                <div className={style.MovieDelete} onClick={() => onDeleteMovie(movie.id)}></div>
                <div className={style.MovieImageFader}></div>
                <img className={style.MovieImage} src={movie.poster} alt="poster" />
                <div className={style.MovieImageBottom}>
                  <div className={style.MovieLikesBox}>
                    <div className={style.MovieLike} onClick={() => onEvoluateMovie(movie.id, 'like')}></div>
                    <div className={style.MovieLikeCounter}>{movie.setLike ? movie.likes + 1 : movie.likes - 1}</div>
                  </div>
                  <div className={style.MovieLikesBox}>
                    <div className={style.MovieDislike} onClick={() => onEvoluateMovie(movie.id, 'dislike')}></div>
                    <div className={style.MovieDislikeCounter}>{movie.dislikes}</div>
                  </div>
                </div>
              </div>
              <div className={style.MovieTextBox}>
                <div className={style.MovieTitle}>{movie.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
