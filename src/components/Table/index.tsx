import React, { FC } from "react";
import { useAppSelector } from "../hooks/redux";
import { ProgressLoader } from "../ProgressLoader";
import "./Table.scss";

const Table: FC = () => {
  const { posts, isLoading, error } = useAppSelector(
    (state) => state.postReduser
  );

  const titleСlick = (el: any) => {
    el.classList.toggle("rotate");
  };

  const getPosts = posts.map((post) => (
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
    </div>
  );
};

export default Table;
