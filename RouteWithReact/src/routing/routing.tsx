import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage";
import Layout from "../components/Layout";
import UserList from "../components/UserList";
import UserDetails from "../components/UserDetails";
import UsersPage from "../components/UsersPage";

// array of route objects
// two properties path and element to render in that path
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      //   { path: "/users", element: <ListPage /> },
      //   { path: "/contact", element: <ContactPage /> },
      {
        path: "users",
        element: <UsersPage />,
        children: [{ path: ":id", element: <UserDetails /> }],
      },
    ],
  },
]);

export default router;
