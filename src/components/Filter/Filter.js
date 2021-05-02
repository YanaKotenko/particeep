import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { toggleCategoryState } from '../../store/actions';

import {
  FilterBox,
  CategoriesFilter,
  Category,
  Active,
  PerPageBox,
  PerPage,
} from './filter.module.scss';

const Filter = (props) => {
  const dispatch = useDispatch();
  const { categories } = props;

  const onToggleChecked = (id) => {
    dispatch(toggleCategoryState(id));
  }

  const onClickAmount = (amount) => {
    // dispatch(toggleCategoryState(id));
  }

  return (
    <div className={FilterBox}>
      <div className={CategoriesFilter}>
        {categories.map((category) => (
          <div
            key={category.id}
            className={classNames(Category, category.checked ? Active : '')}
            onClick={() => onToggleChecked(category.id)}
          >
            {category.title}
          </div>
        ))}
      </div>
      <div className={PerPageBox}>
        {[4, 8, 12].map((amount) => (
          <div
            key={amount}
            className={classNames(PerPage, true ? Active : '')}
            onClick={() => onClickAmount(amount)}
          >
            {amount}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;
