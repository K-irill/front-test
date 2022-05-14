import TablePosts from "../../Pages/TablePosts";
import { TABLE_ROUTE } from "../../Utils/consts";

export const publicRoutes = [
  {
    path: TABLE_ROUTE + "/:id",
    Element: <TablePosts />,
  },
];
