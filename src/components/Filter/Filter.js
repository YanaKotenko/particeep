import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { toggleCategoryState } from '../../store/actions';

import {
  CategoriesFilter,
  Category,
  CategorySelected,
} from './filter.module.scss';

const Filter = (props) => {
  const dispatch = useDispatch();
  const { categories } = props;

  const onToggleChecked = (id) => {
    dispatch(toggleCategoryState(id));
  }

  return (
    <div className={CategoriesFilter}>
      {categories.map((category) => (
        <div
          key={category.id}
          className={classNames(Category, category.checked ? CategorySelected : '')}
          onClick={() => onToggleChecked(category.id)}
        >
          {category.title}
        </div>
      ))}
    </div>
  );
}

export default Filter;
