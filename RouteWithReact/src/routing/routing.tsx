import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage";
import ListPage from "../components/ListPage";
import ContactPage from "../components/ContactPage";
import UserListPage from "../components/UserListPage";
import UserDetailsPage from "../components/UserDetailsPage";

// array of route objects
// two properties path and element to render in that path
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
//   { path: "/users", element: <ListPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/users", element: <UserListPage /> },
  { path: "/users/:id", element: <UserDetailsPage /> },
]);

export default router;