import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import Pagination from "../Pagination";
import { ProgressLoader } from "../ProgressLoader";
import TableHead from "../TableHead";
import "./Table.scss";

const Table: FC = () => {
  const { posts, postsPerPage, isLoading, error } = useAppSelector(
    (state) => state.postReduser
  );

  const { id = 1 } = useParams();

  const [isActivNextPage, setIsActivNextPage] = useState(true);
  const [isActivPreviousPage, setIsActivPreviousPage] = useState(true);

  const lastPostsIndex = Number(id) * postsPerPage;
  const firstPostsIndex = lastPostsIndex - postsPerPage;
  const currentPosts = posts.slice(firstPostsIndex, lastPostsIndex);

  useEffect(() => {
    if (id === 1) return setIsActivPreviousPage(false);
    setIsActivPreviousPage(true);

    if (Number(id) === Math.ceil(posts.length / postsPerPage))
      return setIsActivNextPage(false);
    setIsActivNextPage(true);
  }, [id, posts.length, postsPerPage]);

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
      ) : currentPosts.length ? (
        <table>
          <TableHead />
          <tbody>{getPosts}</tbody>
        </table>
      ) : (
        <p>По вашему запросу ничего не найдено!</p>
      )}
      <Pagination
        activNextPage={isActivNextPage}
        activPreviousPage={isActivPreviousPage}
        currentPage={Number(id)}
      />
    </div>
  );
};

export default Table;
