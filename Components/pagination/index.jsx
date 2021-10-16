import React from 'react';
import { usePagination, DOTS } from './usePagination';
import classnames from 'classnames';

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  let lastPage = paginationRange[paginationRange.length - 1];

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <ul className={classnames('pagination-container')}>
      <li
        className={classnames(
          'pagination-item',
          {
            disabled: currentPage === 1,
          },
          'leftArrow'
        )}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>

      <div className="numberContainer">
        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return <li className="pagination-item dots">&#8230;</li>;
          }

          return (
            <li
              key={currentPage}
              className={classnames('pagination-item', {
                selected: pageNumber === currentPage,
              })}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
      </div>

      <li
        className={classnames(
          'pagination-item',
          {
            disabled: currentPage === lastPage,
          },
          'rightArrow'
        )}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;
