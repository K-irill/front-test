import React, { FC } from "react";
import { useAppSelector } from "../hooks/redux";
import "./Pagination.scss";

interface IPagination {
  changePage: (number: number) => void;
  nextPage: () => void;
  previousPage: () => void;
  currentPage: number;
  activNextPage: boolean;
  activPreviousPage: boolean;
}

const Pagination: FC<IPagination> = ({
  changePage,
  nextPage,
  previousPage,
  currentPage,
  activNextPage,
  activPreviousPage,
}) => {
  const { posts, postsPerPage } = useAppSelector((state) => state.postReduser);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <span
        className={
          activPreviousPage
            ? "pagination__button"
            : "pagination__button_disabled"
        }
        onClick={() => previousPage()}
      >
        Назад
      </span>
      <div className="pagination__numbers-page">
        {pageNumbers.map((number) => (
          <span
            className={number === currentPage ? "activ" : ""}
            key={number}
            onClick={() => changePage(number)}
          >
            {number}
          </span>
        ))}
      </div>
      <span
        className={
          activNextPage ? "pagination__button" : "pagination__button_disabled"
        }
        onClick={() => nextPage()}
      >
        Далее
      </span>
    </div>
  );
};

export default Pagination;
