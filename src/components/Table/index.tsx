import React, { FC, useEffect, useState } from "react";
import { useAppSelector } from "../hooks/redux";
import Pagination from "../Pagination";
import { ProgressLoader } from "../ProgressLoader";
import "./Table.scss";

const Table: FC = () => {
  const { posts, postsPerPage, isLoading, error } = useAppSelector(
    (state) => state.postReduser
  );
  const [currentPage, setCurrentPage] = useState(1);

  const [isActivNextPage, setIsActivNextPage] = useState(true);
  const [isActivPreviousPage, setIsActivPreviousPage] = useState(true);

  const lastPostsIndex = currentPage * postsPerPage;
  const firstPostsIndex = lastPostsIndex - postsPerPage;
  const currentPosts = posts.slice(firstPostsIndex, lastPostsIndex);

  const changePage = (number: number) => {
    setCurrentPage(number);
  };

  useEffect(() => {
    if (currentPage === 1) return setIsActivPreviousPage(false);
    setIsActivPreviousPage(true);

    if (currentPage === Math.ceil(posts.length / postsPerPage))
      return setIsActivNextPage(false);
    setIsActivNextPage(true);
  }, [currentPage, posts.length, postsPerPage]);

  const changeNextPage = () => {
    if (currentPage === Math.ceil(posts.length / postsPerPage)) return;

    setCurrentPage((prev) => prev + 1);
  };

  const changePreviousPage = () => {
    if (currentPage === 1) return;

    setCurrentPage((prev) => prev - 1);
  };

  const titleСlick = (el: any) => {
    el.classList.toggle("rotate");
  };

  const getPosts = currentPosts.map((post) => (
    <tr className="table-posts__body" key={post.id}>
      <td className="table-posts__id_body">{post.id}</td>
      <td>{post.title}</td>
      <td>{post.body}</td>
    </tr>
  ));

  return (
    <div className="table-posts">
      {isLoading ? (
        <ProgressLoader />
      ) : error ? (
        <p>{`Произошла ошибка! Информация об ошибке: ${error} `}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th
                className="table-posts__id_head"
                onClick={(el) => titleСlick(el.target)}
              >
                ID
              </th>
              <th
                className="table-posts__head_header"
                onClick={(el) => titleСlick(el.target)}
              >
                Заголовок
              </th>
              <th
                className="table-posts__head_description"
                onClick={(el) => titleСlick(el.target)}
              >
                Описание
              </th>
            </tr>
          </thead>
          <tbody>{getPosts}</tbody>
        </table>
      )}
      <Pagination
        changePage={changePage}
        nextPage={changeNextPage}
        activNextPage={isActivNextPage}
        activPreviousPage={isActivPreviousPage}
        previousPage={changePreviousPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Table;
