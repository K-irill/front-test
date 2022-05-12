import React, { FC } from "react";
import "./Table.scss";

const Table: FC = () => {
  return (
    <div className="table-posts">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Заголовок</th>
            <th>Описание</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table-posts__id">1</td>
            <td>
              sunt aut facere repellat provident occaecati excepturi optio
              reprehenderit
            </td>
            <td>
              quia et suscipit\nsuscipit recusandae consequuntur expedita et
              cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est
              autem sunt rem eveniet architecto
            </td>
          </tr>
          <tr>
            <td className="table-posts__id">2</td>
            <td>qui est esse</td>
            <td>
              est rerum tempore vitae\nsequi sint nihil reprehenderit dolor
              beatae ea dolores neque\nfugiat blanditiis voluptate porro vel
              nihil molestiae ut reiciendis\nqui aperiam non debitis possimus
              qui neque nisi nulla
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
