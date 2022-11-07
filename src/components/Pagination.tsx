import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { setCurrentPage } from '../redux/filters/slice';

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const total = useAppSelector((state) => state.products.total);
  const limit = useAppSelector((state) => state.products.limit);
  const page = useAppSelector((state) => state.filters.page);
  const totalPages = Math.ceil(total / limit);

  const onClick = (index: number) => {
    dispatch(setCurrentPage(index + 1));
  };

  return (
    <div className="pagination">
      {totalPages > 0 &&
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
