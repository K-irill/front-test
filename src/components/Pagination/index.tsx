import React, { FC } from "react";
import { Link } from "react-router-dom";
import { TABLE_ROUTE } from "../../Utils/consts";
import { useAppSelector } from "../hooks/redux";
import "./Pagination.scss";

interface IPagination {
  currentPage: number;
  activNextPage: boolean;
  activPreviousPage: boolean;
}

const Pagination: FC<IPagination> = ({
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
      {currentPage === 1 ? (
        <span className="pagination__button_disabled">Назад</span>
      ) : (
        <Link
          to={TABLE_ROUTE + `/${currentPage - 1}`}
          className={
            activPreviousPage
              ? "pagination__button"
              : "pagination__button_disabled"
          }
        >
          Назад
        </Link>
      )}
      <div className="pagination__numbers-page">
        {pageNumbers.map((number) => (
          <Link
            to={TABLE_ROUTE + `/${number}`}
            className={number === currentPage ? "activ" : ""}
            key={number}
          >
            {number}
          </Link>
        ))}
      </div>
      {currentPage === Math.ceil(posts.length / postsPerPage) ? (
        <span className="pagination__button_disabled">Далее</span>
      ) : (
        <Link
          to={TABLE_ROUTE + `/${currentPage + 1}`}
          className={
            activNextPage ? "pagination__button" : "pagination__button_disabled"
          }
        >
          Далее
        </Link>
      )}
    </div>
  );
};

export default Pagination;
