import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { setCurrentPage } from '../redux/filters/slice';
import { selectProducts } from '../redux/product/selectors';

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const { total, limit } = useAppSelector(selectProducts);
  const page = useAppSelector((state) => state.filters.page);
  const totalPages = Math.ceil(total / limit);

  const onClick = (index: number) => {
    dispatch(setCurrentPage(index + 1));
  };

  return (
    <div className="pagination">
      {totalPages > 1 &&
        [...Array(totalPages)].map((val, index) => (
          <button
            key={index}
            onClick={() => onClick(index)}
            className={
              page === index + 1
                ? 'pagination-button pagination-button--active'
                : 'pagination-button'
            }>
            {index + 1}
          </button>
        ))}
    </div>
  );
};
