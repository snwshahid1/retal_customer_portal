import React from "react";
import { FC, memo } from "react"
import { PaginationHolder } from "./style";

const Pagination: FC<any> = ({
  currentPage,
  rowsPerPage, 
  rowCount,
  onChangePage,
  onChangeRowsPerPage
}) => {

  const getNumberOfPages = (rowCount: number, rowsPerPage: number): number => {
    return Math.ceil(rowCount / rowsPerPage);
  }

  const lastIndex = currentPage * rowsPerPage;
	const firstIndex = lastIndex - rowsPerPage + 1;
  const numPages = getNumberOfPages(rowCount, rowsPerPage);
  const disabledLesser = currentPage === 1;
	const disabledGreater = currentPage === numPages;

  const range =
		currentPage === numPages
			? `${firstIndex}-${rowCount} of ${rowCount}`
			: `${firstIndex}-${lastIndex} of ${rowCount}`;

  const handleRowsPerPage = React.useCallback(
		(e: any) => {onChangeRowsPerPage(Number(e.target.value), currentPage)},
		[currentPage, onChangeRowsPerPage],
	);
  
  const handlePrevious = React.useCallback(() => onChangePage(currentPage - 1), [currentPage, onChangePage]);
	const handleNext = React.useCallback(() => onChangePage(currentPage + 1), [currentPage, onChangePage]);

  const paginationSize = [10, 50, 100];
  return (
    <PaginationHolder>
      <div className="items-per-page d-flex">
        <div className="links-list">
          {paginationSize.map((item, i:number) => (
            <button
            key={i} 
            className={rowsPerPage === item ? 'active-item' : ''} 
            onClick={handleRowsPerPage} value={item}
          >
            {item}
          </button>
          ))}
        </div>
        <span className="nav-label">Elements per page</span>
      </div>
      <div className="pages-links d-flex">
        <span className="na-label">{range}</span>
        <div className="links-list">
          <button
            id="pagination-previous-page"
            type="button"
            className="prev-page"
            aria-label="Previous Page"
            aria-disabled={disabledLesser}
            onClick={handlePrevious}
            disabled={disabledLesser}
          >
            <i className="sm-icon arrow-icon icon-black"></i>
          </button>

          <button
            id="pagination-next-page"
            type="button"
            className="next-page"
            aria-label="Previous Page"
            aria-disabled={disabledGreater}
            onClick={handleNext}
            disabled={disabledGreater}
          >
            <i className="sm-icon arrow-icon icon-black"></i>
          </button>
        </div>
      </div>
    </PaginationHolder>
  );
};

export default memo(Pagination);
