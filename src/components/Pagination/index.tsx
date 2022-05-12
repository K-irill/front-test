import React, { FC } from "react";

interface IPagination {
  count?: number;
}

const Pagination: FC<IPagination> = (count) => {
  return (
    <div className="pagination">
      <span>Назад</span>

      <span>Продолжить</span>
    </div>
  );
};

export default Pagination;
