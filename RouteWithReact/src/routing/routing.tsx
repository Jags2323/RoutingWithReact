import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage";
import Layout from "../components/Layout";
import UserDetails from "../components/UserDetails";
import UsersPage from "../components/UsersPage";
import ErrorPage from "../components/ErrorPage";

// array of route objects
// two properties path and element to render in that path
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // handle error page
    errorElement:<ErrorPage/>,
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
