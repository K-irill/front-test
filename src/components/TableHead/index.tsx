import React, { FC } from "react";
import { postsSlice } from "../../store/reducers/postsSlice";
import { useAppDispath } from "../hooks/redux";
import "./TableHead.scss";

const TableHead: FC = () => {
  const dispath = useAppDispath();
  const { sortId, sortTitle, sortBody } = postsSlice.actions;

  const sortedHead = (el: any, nameSorted: any) => {
    el.classList.toggle("rotate");
    dispath(nameSorted());
  };

  return (
    <thead>
      <tr>
        <th
          className="table-posts__id_head"
          onClick={(el) => sortedHead(el.target, sortId)}
        >
          ID
        </th>
        <th
          className="table-posts__head_header"
          onClick={(el) => sortedHead(el.target, sortTitle)}
        >
          Заголовок
        </th>
        <th
          className="table-posts__head_description"
          onClick={(el) => sortedHead(el.target, sortBody)}
        >
          Описание
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
