import React, { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import TablePosts from "../../Pages/TablePosts";
import { TABLE_ROUTE } from "../../Utils/consts";
import { publicRoutes } from "./router";

const AppRouter: FC = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Element }) => (
        <Route key={path} path={path} element={Element} />
      ))}
      <Route path="/" element={<Navigate to={TABLE_ROUTE + "/:1"} />} />
      <Route path="*" element={<TablePosts />} />;
    </Routes>
  );
};

export default AppRouter;
